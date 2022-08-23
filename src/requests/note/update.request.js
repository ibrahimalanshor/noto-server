const { body } = require('express-validator');

function createNoteUpdateRequest() {
  const rules = [
    body('name').exists().bail().notEmpty().bail().isString().bail(),
    body('content').exists().bail().notEmpty().bail().isString().bail(),
    body('color')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .bail()
      .isString()
      .bail()
      .isIn(['primary', 'dark', 'warning', 'danger', 'success', 'info']),
    body('tagId')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .bail()
      .isInt()
      .bail(),
  ];

  return {
    rules,
  };
}

module.exports = createNoteUpdateRequest;
