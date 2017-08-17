
var chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
let models = require('../database/index.js');
let sequelize = models.sequelize;


module.exports.run = () => {
  // main function that runs all the tests
  describe
}

// .sync({force: true}) // sqlz look over all models defined and gen sql querys under the hood that will turn creates associated tables
// // good for db testing


