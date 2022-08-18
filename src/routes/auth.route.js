const { createAuthController } = require('../controllers');
const { createAuthLoginRequest } = require('../requests/auth');
const { createRequestValidator } = require('../helpers');

function createAuthRoute(router) {
  const authController = createAuthController();
  const authLoginRequest = createAuthLoginRequest();

  router.post(
    '/login',
    createRequestValidator(authLoginRequest.rules),
    authController.login
  );

  return {
    path: '/auth',
    router,
  };
}

module.exports = createAuthRoute;
