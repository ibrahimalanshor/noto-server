const { body } = require('express-validator');

function createAuthLoginRequest() {
  const rules = [
    body('email')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isEmail()
      .withMessage('validation.email')
      .bail(),
    body('password')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string'),
  ];

  return {
    rules,
  };
}

module.exports = createAuthLoginRequest;
