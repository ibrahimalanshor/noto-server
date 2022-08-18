const { validationResult, matchedData } = require('express-validator');
const { UnprocessableEntityException } = require('../exceptions');

function createRequestValidator(rules) {
  const validator = async (req, res, next) => {
    try {
      await validationResult(req).throw();

      req.body = matchedData(req);

      next();
    } catch (err) {
      next(new UnprocessableEntityException('', err.mapped()));
    }
  };

  return [rules, validator];
}

module.exports = createRequestValidator;
