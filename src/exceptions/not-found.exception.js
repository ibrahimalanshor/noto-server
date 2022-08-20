const HttpException = require('./http.exception.js');

class NotFoundException extends HttpException {
  constructor(message, errors) {
    super(404, 'Not Found', message ?? '', errors ?? {});
  }
}

module.exports = NotFoundException;
