var crypto = require('crypto');
var jwt = require('jsonwebtoken');

function auth(db, router) {
  router
  .post(function (req, res) {
    var userData = req.body;
    userData.pw = crypto.createHash('sha256').update(userData.pw).digest('hex');
    console.log(userData.pw);
    db.findAll({
      where:userData
    }).then(result => {
      console.log(result)
      if(result.length > 0) {
        var token = jwt.sign(
          {uid:result[0].id, email:userData.email},
          'signinprivatekey'
        )
        res.json({token:token})
      }
      else {
        res.json({token:''})
      }
    })
  })
}
module.exports = auth;