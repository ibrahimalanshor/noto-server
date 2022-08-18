module.exports = {
  env: 'production',
  app: {
    port: process.env.PORT || process.env.APP_PORT || 80,
    url: process.env.APP_URL || 'http://test.com',
    key: process.env.APP_KEY || 'secret',
  },
};
