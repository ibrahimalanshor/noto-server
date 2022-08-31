module.exports = (err) =>
  Object.fromEntries(
    Object.entries(err.mapped()).map(([name, error]) => [
      name,
      { ...error, msg: req.polyglot.t(error.msg, { attribute: error.param }) },
    ])
  );
