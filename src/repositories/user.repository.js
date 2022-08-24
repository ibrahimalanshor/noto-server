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

  async function findById(id, options) {
    const user = await userModel.findByPk(id, options);

    isNotFound(user);

    return user;
  }

  async function update(user, body) {
    return await user.update(body);
  }

  return { create, findByEmail, findById, update };
}

module.exports = createUserRepository;
