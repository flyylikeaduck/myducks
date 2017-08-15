
const client = require('twilio')(accountSid, authToken);
const credentials = require('../../config.js');
//Twilio credentials
const accountSid = credentials.twilio.accountSid;
const authToken = credentials.twilio.authToken;

function sendMessage(phones) {
  phones.forEach(phone => {
  console.log(`Sending message to ${phone}`);
  client.messages.create({
    body: `Twilio test ${new Date()}`,
    to: `${phone}`,
    from: '+19167392452'
  })
  .then((message) => console.log(message.sid));
  }); 
} 

module.exports = {
  sendMessage,
}