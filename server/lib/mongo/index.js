const client = require('./client');
const customer = require('./customer');

async function baseClient() {
  const connection = await client.getConnection();
  return {
    customer: customer(connection),
  };
}

module.exports = baseClient;

