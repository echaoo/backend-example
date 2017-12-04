var db_connecter = require('./dbConfig')
var express = require('express');
var app = express();

function getComments () {
    db_connecter.query('select comments from tutorial', function (err, rows, fileds) {
        console.log(err)
        console.log(rows[0].comments)
    })
}

getComments()

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});