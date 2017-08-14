const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// creates 'Users' table
// sequelize automatically adds id, createdAt, and updatedAt cols
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING
});

var Event = sequelize.define('event', {
  description: Sequelize.STRING,
  lat: Sequelize.DECIMAL,
  lng: Sequelize.DECIMAL
})

// adds foreign key to Event
User.hasMany(Event);

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
  .sync({force: true}) // sqlz look over all models defined and gen sql querys under the hood that will turn creates associated tables
  .then(function(err) {
    console.log('it worked');
  }, function(err) {
    console.log('An err occurred while creating the table:', err);
  });

const saveUser = function(username, )

module.exports = {
  User
}
