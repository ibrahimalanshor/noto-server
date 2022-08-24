const { Filter } = require('../utils/database');

function createProfileService({ userRepository }) {
  async function getProfile(user) {
    const profile = user.toJSON();

    delete profile.password;

    return profile;
  }

  async function updateProfile(user, body) {
    return await userRepository.update(user, body);
  }

  return { getProfile, updateProfile };
}

module.exports = createProfileService;
