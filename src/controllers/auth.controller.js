function createAuthController() {
  async function login(req, res, next) {
    try {
      return res.json(req.body);
    } catch (err) {
      next(err);
    }
  }

  async function register(req, res, next) {
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
