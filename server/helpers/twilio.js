const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTHTOKEN);
//Twilio credentials

function sendMessage(phones, address, eventTime) {
  let slicedAddress = address.slice(0, -5)
  phones.forEach(phone => {
  console.log(`Sending message to ${phone}`);
  client.messages.create({
    body: `Careful! Dangerous event at ${slicedAddress} on ${eventTime}`,
    to: `${phone}`,
    from: '+19167392452'
  })
  .then((message) => console.log(message.sid));
  });
}

module.exports = {
  sendMessage,
}

