const { body } = require('express-validator');

function createTagCreateRequest({ tagService }) {
  const rules = [
    body('name')
      .exists()
      .bail()
      .notEmpty()
      .bail()
      .isString()
      .bail()
      .custom(async (val, { req }) => {
        const exists = await tagService.exists(val, req.user.id);

        if (exists) throw new Error();

        return true;
      })
      .bail(),
    body('color')
      .optional({ nullable: true, checkFalsy: true })
      .bail()
      .notEmpty()
      .bail()
      .isString()
      .bail()
      .isIn(['primary', 'dark', 'warning', 'danger', 'success', 'info']),
  ];

  return {
    rules,
  };
}

module.exports = createTagCreateRequest;
