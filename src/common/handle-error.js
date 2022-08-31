const { HttpException } = require('../exceptions');

function createHandleError(config = {}) {
  return (err, req, res, next) => {
    if (err instanceof HttpException) {
      return res.status(err.status).json({
        status: err.status,
        name: req.polyglot.t(
          `http_status.${err.status.toString().toLowerCase()}`
        ),
        message: req.polyglot.t(
          err.message || `http_status.${err.status.toString().toLowerCase()}`
        ),
        errors: err.errors,
      });
    } else {
      if (config.logging) {
        console.log(err);
      }
    }

    return res
      .status(500)
      .json({ status: 500, message: req.polyglot.t('http_status.500') });
  };
}

module.exports = createHandleError;
