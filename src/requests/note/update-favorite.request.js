const { body } = require('express-validator');

function createTagUpdateFavoriteRequest() {
  const rules = [body('isFavorite').exists().bail().isBoolean().bail()];

  return {
    rules,
  };
}

module.exports = createTagUpdateFavoriteRequest;
