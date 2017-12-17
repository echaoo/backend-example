"use strict";

// 实现与MySQL交互
const mysql = require('mysql');
const config = require('./dbConfig');
const $sql = require('./commentsSqlMapping');

module.exports = {
    init() {
        const connection = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query($sql.createTable, function (err, rows, fields) {
            if (err) {
                console.error('error create: ' + err.stack);
                return;
            }
        });
        connection.end();
    },

    // 添加留言信息
    add(req, res, next) {
        const param = req.body || req.params;
        const connection = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query($sql.insert, [param.title, param.comments, param.date], function (err, rows, fields) {
            console.log(err)
            if (err) {
                res.json({
                    code: '1',
                    msg: '操作失败'
                });
            } else {
                res.json({
                    code: 200,
                    msg: "增加成功"
                });
            }
        });
        connection.end();
    },

    // 返回留言信息
    getMessages(req, res, next) {
        const connection = mysql.createConnection(config.mysql);
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
    },

    // 删除留言信息
    deleteMessage(req, res, next) {
        const param = req.body;
        const connection = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query($sql.deleteMessage, [param.id], function (err, rows, fields) {
            if (err) {
                res.json({
                    code: '1',
                    msg: '操作失败'
                });
            } else {
                res.json({
                    code: 200,
                    msg: "删除成功"
                });
            }
        });
        connection.end();
    }
};