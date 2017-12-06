var db_connecter = require('./dbConfig')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = require('./comments')

app.get('/', function (req, res) {
    res.send('heheh')
});

app.post('/postinfo', function (req, res, next) {
    comments.add(req, res, next);
});

app.get('/api/comments', function (req, res, next) {
    comments.getMessages(req, res, next);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});