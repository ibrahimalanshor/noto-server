const { HttpException } = require('../exceptions');

function createHandleError(config = {}) {
  return (err, req, res, next) => {
    if (err instanceof HttpException) {
      return res.status(err.status).json({
        name: err.name,
        message: err.message,
        errors: err.errors,
      });
    } else {
      if (config.logging) {
        console.log(err);
      }
    }

    return res.status(500).json({ status: 500, message: 'Server Error' });
  };
}

module.exports = createHandleError;
