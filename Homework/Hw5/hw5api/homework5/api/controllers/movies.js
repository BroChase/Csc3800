/**
 * Created by CHASE BROWN on 4/12/2017.
 */


'use strict';
var db = require('../../config/mdb');
var rdb = require('../../config/rdb');


module.exports = {
    save : save,
    getAll : getAll,
    getOne : getOne,
    delmov : delmov,
    updatemov : updatemov,
    saverev : saverev
};
//save a movie the rdb
//first checks to see if the movie exists in the movie db if it doesn't then it rejects the review.
function saverev(req, res, next){
    var id = req.body.title.valueOf();
    db.findOne({'title': id},function(err,response){
        if(err){throw err;}
        else if(response === null){
            res.json({description: "Movie does not exist"})
        }else{
            var review = new rdb({title: req.body.title, reviewer: req.body.reviewer, quote: req.body.quote, rank: req.body.rank});
            review.save(function(err){
                if(err){res.status(204).send();}
                else{
                    res.json({description: "Review Saved"});
                }
            });
        }
    });
}

//save a movie to the db
function save(req,res,next){
    var movie = new db({title: req.body.title, year: req.body.year, actor: req.body.actor});
    movie.save(function(err){
        if(err){res.status(204).send();}
        else {
            res.json({description: "Movie added to the list!"});
        }
    });
}

function getAll(req,res,next){
    db.find({},function(err,response){
        if(err){throw err;}
        else{
            res.send(response);}
    });
}
//get a movie passed through the path params {}
//if the users passes in a ?reviews=True then it will return the reviews from the rdb associated with that movie
function getOne(req, res, next){
    var id = String(req.swagger.params.id.value);
    db.find({'title': id},function(err,response){
        if(err){res.status(204).send();}
        else{
            //if the query string is empty return the movie info only
            if(Object.keys(req.query).length === 0){
                res.send(response);
            }else{
                if(req.query.reviews === 'True'){
                    rdb.find({title: id},function(err,revresponse){
                        var fresponse = response.concat(revresponse);
                        res.send(fresponse);
                });
                }else{
                    res.send(response);
                }
            }
        }
    });
}

//delete A single movie from the db
function delmov(req, res, next) {
    var id = String(req.swagger.params.id.value);
    db.findOneAndRemove({title: id}, function(err, response){
        if(err){res.status(204).send();}
        else if(response === null){
            res.json({description: "No Movie with that title to delete"});
        }
        else{
            res.json({description: "Movie Deleted"});
        }
    });
}
//update A single movie in the db
function updatemov(req, res, next){
    //update the year of the movie only
    var id = String(req.swagger.params.id.value);
    db.findOneAndUpdate({title: id}, ({year: req.body.year}), function(err){
        if(err){throw err;}
        else{
            res.json({description: "Movie Updated"});
        }
    });
}