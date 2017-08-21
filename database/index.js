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
    });
  });
}

module.exports.getAllUserNumbers = () => {
  return models.User.findAll()
  .then(users => {
    return users.map(user => {
      return user.phone;
    });
  });
}


module.exports.createUser = (username, address, lat, lng, icon, phone) => {
  return models.User.create({
    username, address, lat, lng, icon, phone
  });
}

module.exports.createEvent = (description, lat, lng) => {
  return models.Event.create({
    description, lat, lng
  });
};


module.exports.filterByUser = () => {

};