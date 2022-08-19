const sequelize = require('./sequelize.js');
const { UserModel } = require('../models/user');

async function run() {
  try {
    await sequelize.drop();

    await UserModel.sync({ force: true });
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}

run();
