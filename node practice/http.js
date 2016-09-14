var http = require('http'),
    bl = require('bl');

var first = http.get(process.argv[2], function(err, data){
  if (err){
    console.error(err);
  }
  console.log(data.toString());
});