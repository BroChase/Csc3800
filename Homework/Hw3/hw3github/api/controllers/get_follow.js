'use strict';

var util = require('util');

module.exports = {
    getfollow: getfollow
};

function getfollow(req, res, next) {
    var Client = require("github");
    var github = new Client({
        version: '3.0.0'
    });
    //used for authentication with github to access data.
    //48ea3ef1c8c09665f2d78bcf6f11be055b87a211
    //get the users that the user is following

    var vault = require('avault').createVault(__dirname);
    vault.get('sigad', function (token) {
        github.authenticate({
            type: "oauth",
            token: token
        });
    });

    github.users.getFollowing({
        username: "BroChase"
    }, function(err, response){
        res.send(response);
    });
}