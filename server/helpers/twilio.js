const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTHTOKEN);
//Twilio credentials

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