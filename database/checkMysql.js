const mysql = require('mysql');
var config = require('../config.js');

let connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.username,
  password: config.db.password,
});
 
// connection.connect(err => {
//   if (err) {
//       console.error('Error connecting: ' + err.stack);
//       return;
//   }
//   console.log('Connected as id: ' + connection.threadId);
// });

connection.query(`CREATE DATABASE IF NOT EXISTS ${config.db.database}`, (err, result) => {
      if (err) throw err;
      console.log('Database safety_buddies created');
  });

connection.end(err => {
if (err) throw err;
});

// module.exports = connection;