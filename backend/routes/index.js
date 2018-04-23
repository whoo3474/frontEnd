var express = require('express');
var admin = require('firebase-admin');
var router = express.Router();

var serviceAccount = require('../haru-studio-bd682-firebase-adminsdk-2k7zs-1601717c2e');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://haru-studio-bd682.firebaseio.com"
});

/* GET home page. */
router.get('/notice', function(request, response, next) {
  // response.render('index', { title: 'Express' });
  admin.firestore().collection('notice').get().then(function(snapshot) {
    var result = [];
    snapshot.forEach(function(item) {
      result.push(item.data());
    })
    response.json(result);
  })
  // response.json({agent:request.get('user-agent')})
});

module.exports = router;
