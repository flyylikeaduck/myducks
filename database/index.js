const models = require("./models");

module.exports.getUsers = () => {

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


module.exports.filterByUser