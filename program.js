"use strict";
var http = require('http');
var bl = require('bl');

var strings = [];
var count = 0;

for (let i = 0; i < 3; i++) {
    http.get(process.argv[i+2], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) return console.error(err);
            strings[i] = data.toString();
            count++;
            if (count == 3) strings.forEach(string => console.log(string));
        }));
    }).on('error', console.error);
}