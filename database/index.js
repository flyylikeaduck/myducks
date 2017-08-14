const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', '',   {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// creates 'Users' table
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING
});

var Event = sequelize.define('event', {
  description: Sequelize.STRING,
  lat: Sequelize.INTEGER,
  lng: Sequelize.INTEGER
})

// adds foreign key to Event
User.hasMany(Event);

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

module.exports = {

}