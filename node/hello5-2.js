var fs = require("fs");
var path = require("path");

module.exports = function (dir, extfilter, callback) {
  fs.readdir(dir, function(error, files){
    if(error){
      callback(error);
    }else{
      var filteredFiles = [];
      var filter =  "." + extfilter;
      for(var i=0; i<files.length; i++){
        var extension = path.extname(files[i]);
        if(extension == filter){
          filteredFiles.push(files[i]);
        }
      }
      if(callback){
        return callback(null, filteredFiles);
      }
    }
  });
}
