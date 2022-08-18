const createApp = require('./src/app.js');
const config = require('./config');
const routes = require('./src/routes');

const app = createApp({
  env: config.env,
  port: config.app.port,
  routes,
});

app.run();
