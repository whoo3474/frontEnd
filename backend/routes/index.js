var express = require('express');
var router = express.Router();

var item = require('./item');
var cart = require('./cart');

// / 경로로 들어오는 GET 메소드 리퀘스트 처리
router.get('/', function(req, res) {
  return res.json({isServerRun:'OK'})
})

// / 경로로 들어오는 POST 메소드 리퀘스트 처리
router.post('/', function(req, res) {
  return res.json({isServerRun:'OK'})
})

new item(router.route('/item'))
new cart(router.route('/cart'))


module.exports = router;
