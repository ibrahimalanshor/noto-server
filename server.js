const App = require('./src/app.js');
const config = require('./config');

const app = new App({
  env: config.env,
  port: config.app.port,
});

app.run();
