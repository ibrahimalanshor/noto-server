const HttpException = require('./http.exception.js');

class UnprocessableEntityException extends HttpException {
  constructor(message, errors) {
    super(422, 'Unprocessable Entity', message ?? '', errors ?? {});
  }
}

module.exports = UnprocessableEntityException;
