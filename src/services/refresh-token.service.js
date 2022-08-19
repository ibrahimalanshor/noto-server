const crypto = require('crypto');

function createRefreshTokenService({ refreshTokenRepository }) {
  async function createRefreshToken(userId) {
    return await refreshTokenRepository.create({
      userId,
      token: crypto.randomBytes(32).toString('hex'),
      expiresIn: new Date(Date.now() + 1000 * 864000 * 30),
    });
  }

  return { createRefreshToken };
}

module.exports = createRefreshTokenService;
