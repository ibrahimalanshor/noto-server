module.exports =
  (target) =>
  (val, { req }) => {
    if (val !== req.body[target]) throw new Error();

    return true;
  };
