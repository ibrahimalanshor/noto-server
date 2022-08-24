const { body } = require('express-validator');
const { confirmed } = require('../../utils/validators');

function createProfileUpdateRequest() {
  const rules = [
    body('name').exists().bail().notEmpty().bail().isString().bail(),
    body('password')
      .exists()
      .bail()
      .notEmpty()
      .bail()
      .isString()
      .bail()
      .isLength({ min: 6 }),
    body('password_confirmation').exists().bail().custom(confirmed('password')),
  ];

  return {
    rules,
  };
}

module.exports = createProfileUpdateRequest;
