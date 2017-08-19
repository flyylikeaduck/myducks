const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.JAWSDB_URL);
// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });

// creates 'Users' table
// sequelize automatically adds id, createdAt, and updatedAt cols
let User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false,
    // unique: true
  },
  // postponegeocoding for now
  address: {
    type: Sequelize.STRING
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
  },
  // may need email if we use OAUTH
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false
  }
});

let Event = sequelize.define('event', {
  description: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false
  },
  latitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -90, max: 90 },
  },
  longitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -180, max: 180 },
  }
});

Event.belongsTo(User);

// adds foreign key to Event
// Event.belongsTo(User, {
//   foreignKey: {
//     name: 'user_id',
//     allowNull: false
//   }
// });


// Sync db

sequelize
  .sync() // no need to drop Users table each time
  .then(() => {
    console.log('Database is working!');
  })
  .catch(function(err) {
    console.log('An err occurred while updating the db:', err);
  });


module.exports = {
  User,
  Event
}

