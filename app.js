var express = require('express');
var app = express();
var request = require('request');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'nodeExpressTest'});


app.get('/', function (req, res) {
  log.info('Hello World called');
  res.send('Hello World!');
});

app.get('/google', function(req, res) {
  log.info('Google Request');

  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
    else {
      log.error(error);
      res.status(500);
      res.send('Internal Server Error');

    }
  });
});

app.listen(3000, function () {
  log.info('Example app listening on port 3000!');
});
