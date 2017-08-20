const axios = require ('axios');

module.exports.getGeocode = (address) => {
  let plusAddress = address.split(' ').join('+');

  let params = {
    'address': `${plusAddress}`,
    'key': `${process.env.GOOGLE_API}`
  }

  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {params})
}