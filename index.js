var express = require('express');
var app = module.exports = express();

var ae = require('./ae')(express);
var oauth = require('./oauth')(express);

app.use('/', ae);
app.use('/oauth', oauth);

app.listen(8080);

