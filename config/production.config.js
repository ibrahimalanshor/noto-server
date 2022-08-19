module.exports = {
  env: 'production',
  app: {
    port: process.env.PORT || process.env.APP_PORT || 80,
    url: process.env.APP_URL || 'http://test.com',
    key: process.env.APP_KEY || 'secret',
  },
  auth: {
    accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRE || '15m',
    refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRE || '30m',
  },
  db: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'rootpass',
    database: process.env.DB_DATABASE || 'noto-server',
    host: process.env.DB_HOST || 'http://test.com',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};
