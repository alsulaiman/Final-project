const mysql = require("mysql");

// Set up our connection information
const db = mysql.createConnection({
    // port: 3306,
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "nodemysql"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql connected...');
});

// Export connection
module.exports = db;
