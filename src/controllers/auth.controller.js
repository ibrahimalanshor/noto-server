const { SuccessResponse } = require('../responses');

function createAuthController({ authService }) {
  async function register(req, res, next) {
    try {
      const token = await authService.register(req.body);

      return new SuccessResponse('auth.register-success', { token }).send(
        req,
        res
      );
    } catch (err) {
      next(err);
    }
  }

  async function login(req, res, next) {
    try {
      const token = await authService.login(req.body);

      return new SuccessResponse('auth.login-success', { token }).send(
        req,
        res
      );
    } catch (err) {
      next(err);
    }
  }

  async function logout(req, res, next) {
    try {
      await authService.logout(req.body.refreshToken);

      return new SuccessResponse('auth.logout-success').send(req, res);
    } catch (err) {
      next(err);
    }
  }

  async function refreshToken(req, res, next) {
    try {
      const accessToken = await authService.refreshToken(req.body.refreshToken);

      return new SuccessResponse('auth.refresh-token-success', {
        accessToken,
      }).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return {
    login,
    register,
    logout,
    refreshToken,
  };
}

module.exports = createAuthController;
