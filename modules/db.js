const db = require("../config/connection");

module.exports = function (app) {
    app.get('/getcustomers', (req, res) => {
        let sql = `SELECT * FROM customers`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send('Customers fetched...');
        });
    });

    app.get('/customer/:id', (req, res) => {
        let sql = `SELECT * FROM customers WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Customer one fetched...');
        });
    });

} 

