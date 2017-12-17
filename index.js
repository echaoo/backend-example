var express = require('express');
var bodyParser = require('body-parser');
var comments = require('./comments');

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

comments.init()

app.get('/', function (req, res) {
    res.send('heheh')
});

app.post('/postinfo', function (req, res, next) {
    comments.add(req, res, next);
});

app.get('/api/comments', function (req, res, next) {
    comments.getMessages(req, res, next);
});

app.post('/api/delete', function (req, res, next) {
    comments.deleteMessage(req, res, next);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});