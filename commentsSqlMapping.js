var comments = {
    insert:'INSERT INTO tutorial(title, comments, date) VALUES(?,?,?)',
    queryMessages: 'select * from tutorial',
    deleteMessage: 'UPDATE tutorial SET flag = 1 where (id = ? && flag = 0)'
};

module.exports = comments;