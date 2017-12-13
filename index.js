var db_connecter = require('./dbConfig')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var comments = require('./comments')
// var urlencodedParser = bodyParser.urlencoded({ extended: true })


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