var express = require('express');
var router = express.Router();

router.get('/notice', function(request, response, next) {
  admin.firestore().collection('notice').get().then(function(snapshot) {
    var result = [];
    snapshot.forEach(function(item) {
      result.push(item.data());
    })
    response.json(result);
  })
});

module.exports = router;
