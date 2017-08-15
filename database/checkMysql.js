const mysql = require('mysql');

let connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
});

// connection.connect(err => {
//   if (err) {
//       console.error('Error connecting: ' + err.stack);
//       return;
//   }
//   console.log('Connected as id: ' + connection.threadId);
// });

connection.query('CREATE DATABASE IF NOT EXISTS safety_buddies', (err, result) => {
      if (err) throw err;
      console.log('Database safety_buddies created');
  });

connection.end(err => {
if (err) throw err;
});

// module.exports = connection;