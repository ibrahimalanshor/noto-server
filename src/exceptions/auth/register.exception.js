const ConflictException = require('../conflict.exception.js');
const UnauthorizedException = require('../unauthorized.exception.js');

function RegisterException(err) {
  if (err instanceof ConflictException) {
    return new UnauthorizedException('auth.credential-exists');
  }

  return new UnauthorizedException();
}

module.exports = RegisterException;
