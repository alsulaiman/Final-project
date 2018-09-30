var db = require("../config/connection");

module.exports = function (app) {
    app.get('/api/drivers', (req, res) => {
        let sql = `SELECT * FROM drivers`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

    app.get('/api/trips', (req, res) => {
        let sql = `SELECT * FROM trips`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

    app.get('/api/riders', (req, res) => {
        let sql = `SELECT * FROM riders`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

    app.get('/api/history', (req, res) => {
        let sql = `SELECT * FROM history`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });
};