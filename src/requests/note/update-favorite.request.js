const { body } = require('express-validator');

function createTagUpdateFavoriteRequest() {
  const rules = [
    body('isFavorite')
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

module.exports = createTagUpdateFavoriteRequest;
