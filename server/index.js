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
  db.getAllUserLocations()
    .then(userLocations => {
      res.send(userLocations)
    })
    .catch(err =>
      res.status(500).send('something broke in app.get/users!', err)
    )
});


app.post('/signup', (req, res) => {

  let username = req.body.username;
  let address = req.body.address;
  // Frontend needs to require xxx-xxx-xxxx phonenumber format
  let phone = '+1' + req.body.phone.split('-').join('');
  let icon = 'http://i.imgur.com/1SPcmdd.png';

  googleMaps.getGeocode(address)
    .then(response => {
      let lat = response.data.results[0].geometry.location.lat;
      let lng = response.data.results[0].geometry.location.lng;
      db.createUser(username, address, lat, lng, icon, phone)
    })
    // .then(() => {
    //   console.log('quack! saved user');
    //   db.getAllUserLocations()
    // })
    .then(() => {
      console.log('saved user');
      res.send();
    })
    .catch(err => {
      console.log('oops err in server index', err)
    })
});

app.post('/event', (req, res) => {
  // TODO: frontend sends reporting user info to link foreign key when saving event
  let lat = req.body.lat;
  let lng = req.body.lng;
  // TODO: frontend sends   customized event reports
  // let eventType = req.body.eventType;
  let description = 'danger';

  db.createEvent(description, lat, lng)
    .then(() =>
      db.getAllUserNumbers()
    )
    .then(userNums => {
      console.log('userNums array!!', userNums)
      twilio.sendMessage(userNums);
    })
    .then(() => {
      console.log('sent messages to users!');
      res.send();
    })
    .catch(err =>
      console.log('err from server POST /event', err)
    );
});

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
