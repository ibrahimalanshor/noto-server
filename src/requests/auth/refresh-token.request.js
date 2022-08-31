const { body } = require('express-validator');

function createAuthRefreshTokenRequest() {
  const rules = [
    body('refreshToken')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string')
      .isJWT()
      .bail()
      .withMessage('validation.jwt'),
  ];

  return {
    rules,
  };
}

module.exports = createAuthRefreshTokenRequest;
