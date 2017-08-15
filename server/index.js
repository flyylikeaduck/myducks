const express = require('express');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const twilio = require('./helpers/twilio.js');
const checkMysql = require('../database/checkMysql.js');

let app = express();

let port = process.env.PORT || 3000;
let urlencodedParser = bodyParser.urlencoded({ extended: false });
//Serve public folder at app root URL
app.use(express.static(__dirname + '/../client/dist'));
app.get('/', express.static('public'));

app.post('/event', urlencodedParser, (req, res) => {
  let lat = req.query.latitude;
  let lng = req.query.longitude;
  let eventType = req.query.eventType;
  
});

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
