const db = require("../config/connection");

module.exports = function (app) {
    app.get('/getdrivers', (req, res) => {
        let sql = `SELECT * FROM drivers`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send('Drivers fetched...');
        });
    });

    app.get('/gettrips', (req, res) => {
        let sql = `SELECT * FROM trips`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send('Trips fetched...');
        });
    });

    app.get('/getriders', (req, res) => {
        let sql = `SELECT * FROM riders`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send('Riders fetched...');
        });
    });
} 

