function item(router) {
    router.get('/item', function (req, res) {
        __db.query('select * from items', function (error, results, fields) {
            if (error) {
                // next(error);
                // return;
                return res.json(error);
            }
            return res.json(results)
        });    
    })
    router.post('/item', function (req, res) {
        // __db.query('insert ', function(error, results, fields) {
        //     if (error) {
        //         // next(error);
        //         // return;
        //         return res.json(error);
        //     }
        //     return res.json(results)
        // })
    })
}
 
module.exports = item;