const createApp = require('./src/app.js');
const config = require('./config');
const routes = require('./src/routes');
const { connect } = require('./src/database');

const app = createApp({
  env: config.env,
  port: config.app.port,
  routes,
});

connect().then(() => {
  app.run();
});
