const models = require("./models");

module.exports.getAllUserLocations = () => {
  return models.User.findAll()
  .then(users => {
    return users.map(user => {
      let userLocation = {};
      // userLocation['username'] = user.username;
      userLocation['lat'] = user.lat;
      userLocation['lng'] = user.lng;
      userLocation['icon'] = user.icon;
      return userLocation;
    })
  })
}

// module.exports.getAllUserNumbers = () => {
//   return models.User.findAll()
// }


module.exports.createUser = (username, address, lat, lng, icon, phone) => {
  return models.User.create({
    username, address, lat, lng, icon, phone
  });
}

module.exports.createEvent = (lat, lng) => {
  return models.Event.create({

  })
};


module.exports.filterByUser = () => {

};