require('dotenv/config');

module.exports = {
  env: 'development',
  app: {
    port: process.env.PORT || process.env.APP_PORT || 4000,
    url: process.env.APP_URL || 'http://localhost:4000',
    key: process.env.APP_KEY || 'secret',
  },
  auth: {
    accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRE || '15m',
    refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRE || '30m',
  },
  db: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'noto-server',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};
