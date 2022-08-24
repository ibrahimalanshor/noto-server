const { requireAuth } = require('../middlewares');

const { createProfileService } = require('../services');
const { createProfileController } = require('../controllers');

function createProfileRoute(router) {
  const profileService = createProfileService({});
  const profileController = createProfileController({ profileService });

  router.get('/profile', requireAuth, profileController.getProfile);
}

module.exports = createProfileRoute;
