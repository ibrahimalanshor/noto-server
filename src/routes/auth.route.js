const { createAuthController } = require('../controllers');
const {
  createAuthLoginRequest,
  createAuthRegisterRequest,
  createAuthLogoutRequest,
  createAuthRefreshTokenRequest,
} = require('../requests/auth');
const { createRequestValidator } = require('../helpers');
const {
  createUserRepository,
  createRefreshTokenRepository,
} = require('../repositories/');
const {
  createAuthService,
  createUserService,
  createRefreshTokenService,
} = require('../services');
const {
  createPasswordService,
  createTokenService,
} = require('../services/common');
const { UserModel } = require('../models/user');
const { RefreshTokenModel } = require('../models/refresh-token');

function createAuthRoute(router) {
  const userRepository = createUserRepository({ userModel: UserModel });
  const refreshTokenRepository = createRefreshTokenRepository({
    refreshTokenModel: RefreshTokenModel,
  });

  const passwordService = createPasswordService();
  const userService = createUserService({ userRepository, passwordService });
  const refreshTokenService = createRefreshTokenService({
    refreshTokenRepository,
  });
  const tokenService = createTokenService({ refreshTokenService });
  const authService = createAuthService({
    userService,
    refreshTokenService,
    passwordService,
    tokenService,
  });

  const authController = createAuthController({ authService });

  const authLoginRequest = createAuthLoginRequest();
  const authRegisterRequest = createAuthRegisterRequest();
  const authLogoutRequest = createAuthLogoutRequest();
  const authRefreshTokenRequest = createAuthRefreshTokenRequest();

  router.post(
    '/auth/register',
    createRequestValidator(authRegisterRequest.rules),
    authController.register
  );
  router.post(
    '/auth/login',
    createRequestValidator(authLoginRequest.rules),
    authController.login
  );
  router.post(
    '/auth/logout',
    createRequestValidator(authLogoutRequest.rules),
    authController.logout
  );
  router.post(
    '/auth/refresh-token',
    createRequestValidator(authRefreshTokenRequest.rules),
    authController.refreshToken
  );
}

module.exports = createAuthRoute;
