const config = require('config');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const client = require('./mongo/client');

// async function initialSetUp() {
//   await client.getConnection();
// }
// initialSetUp();

const services = require('./api');

const apiPrefix = config.api.baseUrl;

module.exports = (app) => {
  app.use(cors({ origin: true }));
  app.use(compression());
  app.use(bodyParser.json());
  app.use(apiPrefix + '/health', (req, res) => res.sendStatus(200));

  app.use(apiPrefix + '/customer', [services.customer]);
};
