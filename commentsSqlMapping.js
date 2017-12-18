var comments = {
    createTable: 'CREATE TABLE IF NOT EXISTS `tutorial`(\n' +
    '   `id` INT UNSIGNED AUTO_INCREMENT,\n' +
    '   `comments` VARCHAR(255) NOT NULL,\n' +
    '   `title` VARCHAR(255) NOT NULL,\n' +
    '   `date` VARCHAR(40) NOT NULL,\n' +
    '   `author` VARCHAR(255),\n' +
    '   PRIMARY KEY ( `id` )\n' +
    ')ENGINE=InnoDB DEFAULT CHARSET=utf8;',
    insert:'INSERT INTO tutorial(title, comments, date) VALUES(?,?,?)',
    queryMessages (connection, sortedField, sortedMth) {
        return 'SELECT * FROM tutorial WHERE title LIKE "%"?"%" ORDER BY' + connection.escapeId(sortedField) + ' ' + sortedMth + ' LIMIT ?,?'
    },
    deleteMessage: 'UPDATE tutorial SET flag = 1 where (id = ? && flag = 0)',
    queryTotalNum: 'SELECT COUNT(*) F ROM tutorial'
};

module.exports = comments;