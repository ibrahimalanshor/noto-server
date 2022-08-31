const { body } = require('express-validator');

function createTagUpdateTrashRequest() {
  const rules = [
    body('isTrash')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .isBoolean()
      .bail()
      .withMessage('validation.boolean'),
  ];

  return {
    rules,
  };
}

module.exports = createTagUpdateTrashRequest;
