const { SuccessResponse } = require('../responses');

function createAuthController({ authService }) {
  async function register(req, res, next) {
    try {
      const token = await authService.register(req.body);

      return new SuccessResponse('', { token }).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function login(req, res, next) {
    try {
      const token = await authService.login(req.body);

      return new SuccessResponse('', { token }).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function logout(req, res, next) {
    try {
      await authService.logout(req.body.refreshToken);

      return new SuccessResponse().send(res);
    } catch (err) {
      next(err);
    }
  }

  return {
    login,
    register,
    logout,
  };
}

module.exports = createAuthController;
