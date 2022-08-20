const { body } = require('express-validator');

function createAuthRefreshTokenRequest() {
  const rules = [
    body('refreshToken')
      .exists()
      .bail()
      .notEmpty()
      .bail()
      .isString()
      .bail()
      .isJWT()
      .bail(),
  ];

  return {
    rules,
  };
}

module.exports = createAuthRefreshTokenRequest;
