function item(router) {
    router
    .get(function (req, res) {
        if(req.params.id) {
            __db.query('select * from items where id='+req.params.id, function (error, results, fields) {
                if (error) {
                    return res.json(error);
                }
                if(results.length === 0) {
                    return res.json({sqlMessage:'There is no item with id ' + req.params.id});
                }
                return res.json(results[0]);
            });
        } else {
            __db.query('select * from items', function (error, results, fields) {
                if (error) {
                    return res.json(error);
                }
                return res.json(results)
            });  
            
        }
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