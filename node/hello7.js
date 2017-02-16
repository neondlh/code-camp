var bl = require("bl");
var http = require("http");
var url = process.argv[2];

http.get(url, function(response){
  response.pipe(bl(function (error, data) {
    if(error){
      return console.error(error.message);
    }else{
      var info = data.toString();
      var size = info.length;
      console.log(size);
      console.log(info);
    }
  }));
})
