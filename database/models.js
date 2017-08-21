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
    type: Sequelize.FLOAT,
    notEmpty: true,
    allowNull: false,
    validate: { min: -90, max: 90 }
  },
  lng: {
    type: Sequelize.FLOAT,
    notEmpty: true,
    allowNull: false,
    validate: { min: -180, max: 180 }
  },
  icon: {
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
  lat: {
    type: Sequelize.FLOAT,
    notEmpty: true,
    allowNull: false,
    validate: { min: -90, max: 90 },
  },
  lng: {
    type: Sequelize.FLOAT,
    notEmpty: true,
    allowNull: false,
    validate: { min: -180, max: 180 },
  }
});

// Event.belongsTo(User);

// adds foreign key to Event
// Event.belongsTo(User, {
//   foreignKey: {
//     name: 'user_id',
//     allowNull: false
//   }
// });


// Sync db

sequelize
// drop and re-create for demo purpose
// {force: true}
  .sync()
  .then(() => {
    console.log('Database is working!');
    // User.bulkCreate([
    //   {username: 'kolya', address: '986 Market St, San Francisco, CA 94102', lat: 37.782550, lng: -122.409950, icon: 'http://i95.fastpic.ru/big/2017/0819/a3/9ad0ad417641864026cc88372c9c70a3.jpg', phone: process.env.DB_KOLYANUM},
    //   {username: 'flyyduck', address: '201 Berry St, San Francisco, CA 94158', lat: 37.775538, lng: -122.393370, icon: 'http://i95.fastpic.ru/big/2017/0819/26/b5dd50ffbe055dd8412c984a36933926.jpg', phone: process.env.DB_FLYYNUM}
    // ]);
  })
  .catch(function(err) {
    console.log('An err occurred while updating the db:', err);
  });


module.exports = {
  User,
  Event
}

