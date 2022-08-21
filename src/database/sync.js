const sequelize = require('./sequelize.js');
const { UserModel } = require('../models/user');
const { RefreshTokenModel } = require('../models/refresh-token');
const { TagModel } = require('../models/tag');

async function run() {
  try {
    await sequelize.drop();

    await UserModel.sync({ force: true });
    await RefreshTokenModel.sync({ force: true });
    await TagModel.sync({ force: true });
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}

run();
