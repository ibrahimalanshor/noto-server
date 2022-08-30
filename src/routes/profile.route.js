const { requireAuth } = require('../middlewares');
const { createRequestValidator } = require('../helpers');

const { UserModel } = require('../models/user');
const { createUserRepository } = require('../repositories');

const { createPasswordService } = require('../services/common');

const { createProfileService } = require('../services');
const { createProfileController } = require('../controllers');

const { createProfileUpdateRequest } = require('../requests/profile');

function createProfileRoute(router) {
  const userRepository = createUserRepository({ userModel: UserModel });

  const passwordService = createPasswordService();

  const profileService = createProfileService({
    userRepository,
    passwordService,
  });
  const profileController = createProfileController({ profileService });

  const profileUpdateRequest = createProfileUpdateRequest();

  router.get('/profile', requireAuth, profileController.getProfile);
  router.patch(
    '/profile',
    requireAuth,
    createRequestValidator(profileUpdateRequest.rules),
    profileController.updateProfile
  );
}

module.exports = createProfileRoute;
