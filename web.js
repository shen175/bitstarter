var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var rfile = "index.html"
var buffer = new Buffer(fs.readFileSync(rfile));
var res_txt = buffer.toString();

app.get('/', function(request, response) {
  response.send(res_txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
