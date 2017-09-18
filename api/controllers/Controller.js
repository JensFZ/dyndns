'use strict';
require('dotenv').config();

var ddns = require("cloudflare-dynamic-dns");
var mongoose = require('mongoose'),
    UserSchema = mongoose.model('UserSchema');
var email = process.env.CLOUDFLARE_EMAIL;
var key = process.env.CLOUDFLARE_API_KEY;

exports.create_domain = function(req, res) {
    var hostname = process.env.CLOUDFLARE_HOSTNAME;
    var zonename = process.env.CLOUDFLARE_ZONENAME;

    var options = {
        auth: {
            email: email,
            key: key
        },
        recordName: hostname,
        zoneName: zonename
    };

    ddns.update(options, function(err) {
        if (err) {
            console.log("An error occurred:");
            console.log(err);
        } else {
            console.log("Success!");
        }
    });
};

exports.update_domain = function(req, res) {
    var hostname = process.env.CLOUDFLARE_HOSTNAME;
    var zonename = process.env.CLOUDFLARE_ZONENAME;

    var options = {
        auth: {
            email: email,
            key: key
        },
        recordName: hostname,
        zoneName: zonename
    };

    ddns.update(options, function(err) {
        if (err) {
            console.log("An error occurred:");
            console.log(err);
        } else {
            console.log("Success!");
        }
    });
};

exports.delete_domain = function(req, res) {

};
