const HttpException = require('./http.exception.js');

class ConflictException extends HttpException {
  constructor(message, errors) {
    super(409, 'Conflict', message ?? '', errors ?? {});
  }
}

module.exports = ConflictException;
