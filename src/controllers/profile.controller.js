const { SuccessResponse } = require('../responses');

function createProfileController({ profileService }) {
  async function getProfile(req, res, next) {
    try {
      const user = await profileService.getProfile(req.user);

      return new SuccessResponse('', user).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function updateProfile(req, res, next) {
    try {
      await profileService.updateProfile(req.user, req.body);

      const user = await profileService.getProfile(req.user);

      return new SuccessResponse('', user).send(res);
    } catch (err) {
      next(err);
    }
  }

  return { getProfile, updateProfile };
}

module.exports = createProfileController;
