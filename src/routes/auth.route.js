const { createAuthController } = require('../controllers');
const {
  createAuthLoginRequest,
  createAuthRegisterRequest,
} = require('../requests/auth');
const { createRequestValidator } = require('../helpers');

function createAuthRoute(router) {
  const authController = createAuthController();
  const authLoginRequest = createAuthLoginRequest();
  const authRegisterRequest = createAuthRegisterRequest();

  router.post(
    '/register',
    createRequestValidator(authRegisterRequest.rules),
    authController.register
  );
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
