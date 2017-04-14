/**
 * Created by CHASE BROWN on 4/12/2017.
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

var reviewschema = new Schema({
    title: {type: String, required: true},
    reviewer: {type: String, required: true},
    quote: {type: String, required: true},
    rank: {type: Number, required: true}
});

module.exports = mongoose.model('moviereviews',reviewschema);