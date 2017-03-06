var express = require('express');
var app = express();
var lyrics = require('./lyric.js');

app.use(express.static(__dirname + '/public'));


app.get('/lyric', function(req, res) {
  res.send(lyrics);
});


var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
  console.log(lyrics);
});
