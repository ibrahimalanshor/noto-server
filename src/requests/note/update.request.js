const { body } = require('express-validator');

function createNoteUpdateRequest() {
  const rules = [
    body('name')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string'),
    body('content')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string'),
    body('color')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string')
      .isIn(['primary', 'dark', 'warning', 'danger', 'success', 'info'])
      .withMessage('validation.invalid'),
    body('tagId')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isInt()
      .bail()
      .withMessage('validation.integer'),
  ];

  return {
    rules,
  };
}

module.exports = createNoteUpdateRequest;
