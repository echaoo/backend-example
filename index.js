var db_connecter = require('./dbConfig')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: true })

function getComments () {
    db_connecter.query('select comments from tutorial', function (err, rows, fileds) {
        console.log(err)
        console.log(rows)
    })
}

function insertInfo(title, content, time) {
    db_connecter.query('INSERT INTO tutorial SET ?', {title: title, comments: content, date: time}, function (error, results, fields) {
        // if (error) throw error
    })
    // console.log(query)
}

app.get('/', function (req, res) {
    res.send('heheh')
});

app.post('/postinfo',urlencodedParser, function (req, res) {
    var result = insertInfo(req.body.title, req.body.content, req.body.time)
    console.log(result)
    if (result) {
        res.json({code: 0})
    } else {
        res.json({code: 1})
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});