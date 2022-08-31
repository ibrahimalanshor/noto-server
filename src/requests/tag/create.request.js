const { body } = require('express-validator');

function createTagCreateRequest({ tagService }) {
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
      .withMessage('validation.string')
      .custom(async (val, { req }) => {
        const exists = await tagService.exists(val, req.user.id);

        if (exists) throw new Error();

        return true;
      })
      .bail()
      .withMessage('validation.unique'),
    body('color')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .withMessage('validation.not-empty')
      .bail()
      .isString()
      .withMessage('validation.string')
      .bail()
      .isIn(['primary', 'dark', 'warning', 'danger', 'success', 'info'])
      .withMessage('validation.invalid'),
  ];

  return {
    rules,
  };
}

module.exports = createTagCreateRequest;
