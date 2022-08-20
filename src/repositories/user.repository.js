const { isConflict, isNotFound } = require('../utils/database');

function createUserRepository({ userModel }) {
  async function create(body) {
    try {
      return await userModel.create(body);
    } catch (err) {
      isConflict(err);

      throw err;
    }
  }

  async function findByEmail(email) {
    const user = await userModel.findOne({ where: { email } });

    isNotFound(user);

    return user;
  }

  return { create, findByEmail };
}

module.exports = createUserRepository;
