var fs = require("fs");
var path = require("path");
var dir = process.argv[2];
var extfilter = "." + process.argv[3];
fs.readdir(dir, function(error, files){
  if(error){
    throw error;
  }else{
    for(var i=0; i<files.length; i++){
      var extension = path.extname(files[i]);
      if(extension == extfilter){
        console.log(files[i]);
      }
    }
  }
});
