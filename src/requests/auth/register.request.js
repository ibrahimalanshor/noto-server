const { body } = require('express-validator');
const { confirmed } = require('../../utils/validators');

function createAuthRegisterRequest() {
  const rules = [
    body('name')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string'),
    body('email')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isEmail()
      .bail()
      .withMessage('validation.email'),
    body('password')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.exists')
      .isString()
      .bail()
      .withMessage('validation.string')
      .isLength({ min: 6 })
      .withMessage('validation.length'),
    body('password_confirmation')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .custom(confirmed('password'))
      .withMessage('validation.confirmed'),
  ];

  return {
    rules,
  };
}

module.exports = createAuthRegisterRequest;
