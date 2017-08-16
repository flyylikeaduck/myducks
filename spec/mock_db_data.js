const credentials = require('../config.js');

window.users = [
  {
    "id": 1,
    "username": "kolya",
    "location": {
      "lat" : 37.782716,
      "lng" :  -122.410175
    }
    "phoneNumber": credentials.usersDb.kolyaNum
  },
  {
    "id": 2,
    "username": "flyyduck",
    "location": {
      "lat" : 37.4224764,
      "lng" : -122.0842499
    }
    "phoneNumber": credentials.usersDb.flyyNum
  },
   {
    "id": 3,
    "username": "blkdm0n",
    "location": {
      "lat" : 37.781119,
      "lng" : -122.406306
    }
    "phoneNumber": credentials.usersDb.blkNum
  },

]