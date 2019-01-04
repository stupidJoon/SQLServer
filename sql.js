const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'test'
});

var exports = module.exports = {};

module.exports.select = (table, cb) => {
  const stmt = 'SELECT * FROM ' + table;
  pool.query(stmt, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
    cb(results)
  });
}
