const client = require('mongodb');
const config = require('config');

const mongodb = {
  client: null,
};

async function connect() {
  try {
    const dbUrl = 'mongodb://' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.db;
    const connection = await client.connect(dbUrl);
    mongodb.client = connection;
    return mongodb.client;
  } catch (err) {
    throw err;
  }
}

const close = () => {
  if (mongodb.client) {
    mongodb.client.close();
  }
};

async function getConnection() {
  if (mongodb.client) {
    return mongodb.client;
  }
  const conn = await connect();
  return conn;
}

module.exports = {
  getConnection,
  close,
};
