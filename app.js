var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.body);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hei mualima\n');
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Trace app listening on port: ' + process.env.PORT);
});
