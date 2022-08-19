const HttpException = require('./http.exception.js');

class Conflict extends HttpException {
  constructor(message, errors) {
    super(409, 'Conflict', message ?? '', errors ?? {});
  }
}

module.exports = Conflict;
