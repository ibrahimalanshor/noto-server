const { Filter } = require('../utils/database');

function createProfileService({ userRepository, passwordService }) {
  async function getProfile(user) {
    const profile = user.toJSON();

    delete profile.password;

    return profile;
  }

  async function updateProfile(user, body) {
    if (body.password) {
      body.password = await passwordService.hashPassword(body.password);
    }

    return await userRepository.update(user, {
      name: body.name,
      ...(body.password ? { password: body.password } : {}),
    });
  }

  return { getProfile, updateProfile };
}

module.exports = createProfileService;
