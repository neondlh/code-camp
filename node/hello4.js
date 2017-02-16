var fs = require("fs");
var filePath = String(process.argv[2]);
fs.readFile(filePath, function(error, data){
  if(error){
    throw error;
  }else{
    var lines = data.toString().split("\n").length - 1;
    console.log(lines);
  }
});
