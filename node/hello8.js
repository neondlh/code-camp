var bl = require("bl");
var http = require("http");
var results = {};
var urls = [process.argv[2],process.argv[3],process.argv[4]];
var count = 3;

urls.forEach(function(url){
  http.get(url, function(response){
    response.pipe(bl(function (error, data) {
      if(error){
        return console.error(error.message);
      }else{
        var info = data.toString();
        results[url] = info;
        count --;
        if(count == 0){
          urls.forEach(function(key){
            var data = results[key];
            console.log(data);
          });
        }
      }
    }));
  });
});
