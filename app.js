var express = require('express');
var app = express();

app.get('/', function (error, req, res) {
  console.log(req.body);
  res.send('Hei mualima!');
});

app.listen(process.env.PORT, process.env.IP, function () {
 
  console.log('Trace app listening on port: ' + process.env.PORT);
});
