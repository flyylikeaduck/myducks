require('dotenv').config()
const express = require('express');
const checkMysql = require('../database/checkMysql.js');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const twilio = require('./helpers/twilio.js');
const googleMaps = require('./helpers/googleMaps.js')


//Create instance of express
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let port = process.env.PORT || 3000;

//Serve public folder at app root URL
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', express.static('public'));

app.get('/users', (req, res) => {
  // get users from db
  // send array of users + lat/lng to client

  db.getAllUserLocations()
  .then(users => {
    console.log('users!$$', users)
  })
})


app.post('/signup', (req, res) => {

  let username = req.body.username;
  let address = req.body.address;
  // Frontend needs to require xxx-xxx-xxxx phonenumber format
  let phone = '+1' + req.body.phone.split('-').join('');
  console.log('meow connected to post client! modified PHONE', phone);

// create geocode helper func to Google Maps API
  googleMaps.getGeocode(address)
    .then(response => {
      let lat = response.data.results[0].geometry.location.lat;
      let lng = response.data.results[0].geometry.location.lng;
      db.createUser(username, address, lat, lng, phone)
    })
    // .then(() => {
    //   console.log('quack! saved user');
    //   db.getAllUserLocations()
    // })
    .then(() => {
      console.log('quack! saved user');
      res.send();
    })
    .catch(err => {
      console.log('oops err in server index', err)
    })
})




app.post('/event', (req, res) => {
  let lat = req.query.latitude;
  let lng = req.query.longitude;
  let eventType = req.query.eventType;

  // save event to db
  // then getUsers numbers (array)
  // call twilio sms helper func
  //

});

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
