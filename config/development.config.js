require('dotenv/config');

module.exports = {
  env: 'development',
  app: {
    port: process.env.PORT || process.env.APP_PORT || 4000,
    url: process.env.APP_URL || 'http://localhost:4000',
    key: process.env.APP_KEY || 'secret',
  },
};
