const { body } = require('express-validator');
const { confirmed, related } = require('../../utils/validators');

function createProfileUpdateRequest() {
  const rules = [
    body('name').exists().bail().notEmpty().bail().isString().bail(),
    body('password')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .bail()
      .isString()
      .bail()
      .isLength({ min: 6 }),
    body('password_confirmation')
      .if(related('password'))
      .exists()
      .bail()
      .custom(confirmed('password')),
  ];

  return {
    rules,
  };
}

module.exports = createProfileUpdateRequest;
