/**
 * Created by shawnmccarthy on 1/22/17.
 */
'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {
    getAll : getAll,
    save : save,
    getOne : getOne,
    update : update,
    delMovie : delMovie
};

//GET /movie operationId
function getAll(req, res, next) {

    if(Object.keys(req.query).length === 0) {
        res.json({movies: db.find(), headers: req.headers, description: "No Query"});
    }else{
        res.json({movies: db.find(), headers: req.headers, query: req.query});
    }
}
//POST /movie operationId
function save(req, res, next) {
    res.json({success: db.save(req.body), headers: req.headers, description: "Movie added to the list!"});
}
//GET /movie/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = db.find(id);
    if(movie) {
        res.json(movie);
    }else {
        res.json({headers: req.headers});
        //res.status(204).send();       //commented out for hw2 testing
    }
}
//PUT /movie/{id} operationId
//PUT changed for hw2 testing with no param passed in //no {id} testing
function update(req, res, next) {
    //var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = req.body;
    if(db.update(movie.id, movie)){
        res.json({success: 1, headers: req.headers, description: "Movie updated!"});
    }else{
        res.json({headers: req.headers});
        //res.status(204).send();  //commented out for hw2 testing
    }

}
//DELETE /movie/{id} operationId
//DELETE changed for hw2 testing with no param passed in //no {id} testing
function delMovie(req, res, next) {
    //var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = req.body;
    if(db.remove(movie.id)){
        res.json({success: 1, headers: req.headers, description: "Movie deleted!"});
    }else{
        res.json({headers: req.headers});
        //res.status(204).send();  //commented out for hw2 testing
    }

}