var crypto = require('crypto');

function user(db, router) {
  router
  .get(function (req, res) {
    if(req.params.id) {
      db.findAll({
        where:{
          id:req.params.id
        }
      }).then(item => {
        res.json(item);
      })
    } else {
      db.findAll().then(items => {
        res.json(items);
      })
    }
  })
  .post(function(req, res) {
    var userData = req.body;
    var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(!regex.test(userData.email)) {
      res.json({isSuccess:false, err:'email not valid'})
    }
    if(userData.pw !== userData.pwConfirm) {
      res.json({isSuccess:false, err:'pw not same'})
    }
    else {
      userData.pw = crypto.createHash('sha256').update(userData.pw).digest('hex');
    }
    db.upsert(userData).then(result => {
      res.json({isSuccess:result})
    })
    .catch(err => {
      res.json({isSuccess:false, err:err});
    })
  })
}

module.exports = user;