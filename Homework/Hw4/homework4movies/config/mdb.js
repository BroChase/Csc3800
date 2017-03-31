/**
 * Created by CHASE BROWN on 3/29/2017.
 */
'use strict';

var mongoose = require('../node_modules/mongoose');
mongoose.connect("mongodb://Tester:api@ds143990.mlab.com:43990/apihwmovies");
var movies =  mongoose.connection;
movies.on('error', console.error.bind(console, 'connection error:'));
movies.once('open', function(){
    //connected
});

var Schema = mongoose.Schema;
var movieschema = new Schema({
    title: {type: String, required: true, unique: true},
    year: {type: Number, required: true},
    actor: {type: Array, required: true}
});

module.exports = mongoose.model('newmovie', movieschema);