const mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});
 
//In order to create DB in JawsDB
connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`, (err, result) => {
  if (err) throw err;
  console.log(`Database ${process.env.DB_DATABASE} created`);
});

connection.end(err => {
  if (err) throw err;
});