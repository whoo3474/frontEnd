var express = require('express');
var router = express.Router();
var sequelize = require('../models');

var item = require('./item');
var user = require('./user');
var auth = require('./auth');

// / 경로로 들어오는 GET 메소드 리퀘스트 처리
router.get('/', function(req, res) {
  return res.json({isServerRun:'OK'})
})

// / 경로로 들어오는 POST 메소드 리퀘스트 처리
router.post('/', function(req, res) {
  return res.json({isServerRun:'OK'})
})

new item(sequelize.item, router.route('/item/:id*?'))
new user(sequelize.user, router.route('/user'))
new auth(sequelize.user, router.route('/auth'))


module.exports = router;
