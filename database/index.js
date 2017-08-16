// const checkMysql = require('./checkMysql.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('safety_buddies', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// creates 'Users' table
// sequelize automatically adds id, createdAt, and updatedAt cols
let User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false,
    unique: true
  },
  address: {
    type: Sequelize.STRING
  },
  // may need email if we use OAUTH
  // email: {
  //   type: Sequelize.STRING,
  //   validate: {
  //     isEmail: true
  //   }
  // },
  phone: {
    type: Sequelize.STRING
  }
});

let Event = sequelize.define('event', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false
  },
  lat: {
    type: Sequelize.DECIMAL,
    notEmpty: true,
    allowNull: false
  },
  lng: {
    type: Sequelize.DECIMAL,
    notEmpty: true,
    allowNull: false
  }
})

// adds foreign key to Event
Event.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
    allowNull: false
  }
})


// Sync db

sequelize
  .sync() // no need to drop Users table each time
  .then(function() {
    console.log('Database is working!');
  })
  .catch(function(err) {
    console.log('An err occurred while updating the db:', err);
  });


module.exports = {
  User,
  Event
}

