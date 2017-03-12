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
    //use vault to authenticate.
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