var fs = require('fs');
fs.readdir(process.argv[2], function(err, files) {
   if (err) throw err;
   var extention = process.argv[3];
   files.forEach(function(file) {
       if (file.endsWith(`.${extention}`)) console.log(file);
   });
});