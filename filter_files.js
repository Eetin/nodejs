var fs = require('fs');
var path = require('path');

module.exports = function(directory, extention, callback) {
    fs.readdir(directory, function(err, data) {
        if (err) return callback(err);
        var filtered = data.filter(function(file) {
            return path.extname(file) === `.${extention}`;
        });
        callback(null, filtered);
    });
};