const UnauthorizedException = require('../unauthorized.exception.js');

function LoginException(err) {
  return new UnauthorizedException('auth.credential-incorrect');
}

module.exports = LoginException;
