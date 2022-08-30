module.exports =
  (target) =>
  (val, { req }) =>
    req.body[target];
