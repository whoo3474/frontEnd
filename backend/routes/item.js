function item(router) {
    router
    .get(function (req, res) {
        __db.query('select * from items', function (error, results, fields) {
            if (error) {
                // next(error);
                // return;
                return res.json(error);
            }
            return res.json(results)
        });    
    })
    .post(function (req, res) {
        var query = 'INSERT INTO items (name, price, inventory, photoURL) VALUES ("'+req.body.name+'",'+req.body.price+','+req.body.inventory+',"'+req.body.photoURL+'")';
        
        __db.query(query, function(error, results, fields) {
            if (error) {
                console.log(error)
                return res.json({error:1});
            }
            return res.json({error:0})
        })
    })
}
 
module.exports = item;