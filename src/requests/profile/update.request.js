const { body } = require('express-validator');
const { confirmed, related } = require('../../utils/validators');

function createProfileUpdateRequest() {
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
    body('password')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string')
      .isLength({ min: 6 })
      .withMessage('validation.length'),
    body('password_confirmation')
      .if(related('password'))
      .exists()
      .bail()
      .custom(confirmed('password'))
      .withMessage('validation.confirmed'),
  ];

  return {
    rules,
  };
}

module.exports = createProfileUpdateRequest;
