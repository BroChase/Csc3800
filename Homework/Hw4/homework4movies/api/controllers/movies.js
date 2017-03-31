/**
 * Created by CHASE BROWN on 3/29/2017.
 */

'use strict';
var db = require('../../config/mdb');

module.exports = {
    save : save,
    getAll : getAll,
    getOne : getOne,
    delmov : delmov,
    updatemov : updatemov
};

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
function getOne(req, res, next){
    var id = String(req.swagger.params.id.value);
    db.find({title: id},function(err,response){
        if(err){res.status(204).send();}
        else{
            res.send(response);
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
    //todo work on updating what ever fields get populated in req.body
    // db.find({title: id},function(err, response){
    //     if(err){throw err;}
    //     else{
    //         response.save(function(err){
    //             if(err){throw err;}
    //             else{
    //                 res.json({description: "Movie Updated"});
    //             }
    //         });
    //     }
    //
    // });
}





