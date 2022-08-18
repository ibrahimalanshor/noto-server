const { body } = require('express-validator');

function createAuthLoginRequest() {
  const rules = [
    body('email').exists().bail().notEmpty().bail().isEmail().bail(),
    body('password').exists().bail().notEmpty().bail().isString().bail(),
  ];

  return {
    rules,
  };
}

module.exports = createAuthLoginRequest;
