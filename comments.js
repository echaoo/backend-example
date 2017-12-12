"use strict";

// 实现与MySQL交互
var mysql = require('mysql');
var config = require('./dbConfig');
var $sql = require('./commentsSqlMapping');

module.exports = {

    // 添加用户
    add: function (req, res, next) {
        var param = req.body || req.params;
        console.log(param)
        var connection = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query($sql.insert, [param.title, param.comments, param.date], function (err, rows, fields) {
            if (err) {
                res.json({
                    code: '1',
                    msg: '操作失败'
                });
            }
            res.json({
                code: 200,
                msg: "增加成功"
            });
        });
        connection.end();
    },

    // 返回用户信息
    getMessages: function (req, res, next) {
        var connection = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query($sql.queryMessages, function (err, rows, fields) {
            if (err) {
                res.json({
                    code: '1',
                    msg: '操作失败'
                });
            }
            res.json({
                code: 200,
                data: rows,
                msg: '操作成功'
            });
        });
        connection.end();
    }
};