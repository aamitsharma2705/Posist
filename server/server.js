const config = require('config');
const http = require('http');
const express = require('express');
const router = require('./lib/routes');


const app = express();
router(app);

const server = http.createServer(app);

server.listen(config.port, (err) => {
  if (err) {
    console.log('failed!!');
  }
  console.log('server listening on port: ' + config.port);
});
