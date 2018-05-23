function item(connection, router) {
    router.get('/item', function (req, res, next) {
        connection.connect();
        connection.query('select * from items', function (error, results, fields) {
            if (error) {
                // next(error);
                // return;
                return res.json(error);
            }
            return res.json(results)
            connection.end();
        });    
    })
}
module.exports = item;