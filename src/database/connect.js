const sequelize = require('./sequelize.js');

async function connect() {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
