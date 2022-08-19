const { isConflict } = require('../utils/database');

function createUserRepository({ userModel }) {
  async function create(body) {
    try {
      return await userModel.create(body);
    } catch (err) {
      isConflict(err);

      throw err;
    }
  }

  return { create };
}

module.exports = createUserRepository;
