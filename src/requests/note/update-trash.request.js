const { body } = require('express-validator');

function createTagUpdateTrashRequest() {
  const rules = [body('isTrash').exists().bail().isBoolean().bail()];

  return {
    rules,
  };
}

module.exports = createTagUpdateTrashRequest;
