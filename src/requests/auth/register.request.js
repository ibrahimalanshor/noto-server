const { body } = require('express-validator');

const confirmed =
  (target) =>
  (val, { req }) => {
    if (val !== req.body[target]) throw new Error();

    return true;
  };

function createAuthRegisterRequest() {
  const rules = [
    body('name').exists().bail().notEmpty().bail().isString().bail(),
    body('email').exists().bail().notEmpty().bail().isEmail().bail(),
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

module.exports = createAuthRegisterRequest;
