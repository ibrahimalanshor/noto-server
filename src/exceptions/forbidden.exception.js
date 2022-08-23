const HttpException = require('./http.exception.js');

class ForbiddenException extends HttpException {
  constructor(message, errors) {
    super(403, 'Forbidden', message ?? '', errors ?? {});
  }
}

module.exports = ForbiddenException;
