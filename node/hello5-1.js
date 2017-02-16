var fileFilter = require('./hello5-2.js');

var dir = process.argv[2];
var extfilter = process.argv[3];

fileFilter(dir, extfilter, function(error, callback){
  if(error){
    throw error;
  }else{
    callback.forEach(function(file){
      console.log(file);
    });
  }
});
