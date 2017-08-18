const models = require("./models");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.JAWSDB_URL);
//Or use this method to cnnecto to DB
// const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
//   port: 3306
// }); 

module.exports.getUsers = () => {
  // const checkMysql = require('./checkMysql.js');
  // const config = require('../config.js');
  
}

module.exports.createUser = (username, address, phone) => {
  // add '+1 to phone'
  return models.User.create({
    username, address, phone
  });
}

module.exports.createEvent = (lat, long) => {
  return models.Event.create({

  })
}
  
sequelize
  // {force: true} drops Users table & re-creates it
  .sync() // sqlz look over all models defined and gen sql querys under the hood that will turn creates associated tables
  .then(function(err) {
    console.log('it worked');
  }, function(err) {
    console.log('An err occurred while creating the table:', err);
  });

module.exports.filterByUser