var express = require('express');
var app = express();
var request = require('request');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'nodeExpressTest'});

app.set('port', process.env.PORT || 3000);

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

app.listen(app.get('port'), function () {
  log.info('Example app listening on port ' + app.get('port'));
});
