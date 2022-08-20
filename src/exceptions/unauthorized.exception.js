const HttpException = require('./http.exception.js');

class UnauthorizedException extends HttpException {
  constructor(message, errors) {
    super(401, 'Unauthorized', message ?? '', errors ?? {});
  }
}

module.exports = UnauthorizedException;
