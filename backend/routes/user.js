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
    db.upsert(req.body).then(result => {
      var userData = req.body;
      res.json({isSuccess:result})
    })
    .catch(err => {
      res.json({isSuccess:false, err:err});
    })
  })
}

module.exports = user;