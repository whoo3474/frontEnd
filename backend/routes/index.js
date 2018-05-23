var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var item = require('./item');

var connection = mysql.createConnection({
  host     : 'rds-mysql.cfp92mapp9op.us-east-1.rds.amazonaws.com',
  user     : 'whoo3474',
  password : 'hatuhana1',
  database : 'node_mysql'
});

router.get('/', function(req, res) {
  return res.json({isServerRun:'OK'})
})

new item(connection, router);


module.exports = router;
