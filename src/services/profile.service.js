const { Filter } = require('../utils/database');

function createProfileService({ userRepository }) {
  async function getProfile(user) {
    const profile = user.toJSON();

    delete profile.password;

    return profile;
  }

  return { getProfile };
}

module.exports = createProfileService;
