const { UnauthorizedException } = require('../exceptions');

function createAccessTokenValidator({ tokenService, userService }) {
  return async (req, res, next) => {
    try {
      if (!req.headers.authorization) throw new Error();

      const auth = await tokenService.verify(req.headers.authorization);
      const user = await userService.findById(auth.id);

      req.auth = auth;
      req.user = user;

      next();
    } catch (err) {
      next(new UnauthorizedException());
    }
  };
}

module.exports = createAccessTokenValidator;
