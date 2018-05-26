var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'rds-mysql.cfp92mapp9op.us-east-1.rds.amazonaws.com',
    user     : 'whoo3474',
    password : 'hatuhana1',
    database : 'node_mysql'
});

module.exports = connection;