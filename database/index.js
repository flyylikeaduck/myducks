const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', '',   {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});


// creates 'Users' table
var User = sequelize.define('User', {
  username: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING
});

// sequelize automatically adds id, createdAt, and updatedAt cols

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection successfully established!');
  })
  .catch(err => {
    console.log('Unable to connect with sequelize:', err);
  })

sequelize
  // {force: true} drops Users table & re-creates it
  .sync({force: true})
  .then(function(err) {
    console.log('it worked');
  }, function(err) {
    console.log('An err occurred while creating the table:', err);
  });

