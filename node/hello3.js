var fs = require("fs");
var filePath = String(process.argv[2]);
var buff = fs.readFileSync(filePath);
//console.log(buff.toString());
var fileLines = buff.toString().split("\n").length - 1;
console.log(fileLines);
