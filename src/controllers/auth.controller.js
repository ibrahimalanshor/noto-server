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
      return res.json(req.body);
    } catch (err) {
      next(err);
    }
  }

  return {
    login,
    register,
  };
}

module.exports = createAuthController;
