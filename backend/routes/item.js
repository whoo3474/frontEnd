function item(db, router) {
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
      res.json(result)
    })
    .catch(err => {
      res.json(err);
    })
  })
}

module.exports = item;