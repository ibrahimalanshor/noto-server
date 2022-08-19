const { Sequelize } = require('sequelize');
const config = require('../../config');

module.exports = new Sequelize({
  dialect: config.db.dialect,
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
});
