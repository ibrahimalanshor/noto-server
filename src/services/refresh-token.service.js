const crypto = require('crypto');

function createRefreshTokenService({ refreshTokenRepository }) {
  async function createRefreshToken({ userId, token }) {
    await refreshTokenRepository.deleteByUserId(userId);

    return await refreshTokenRepository.create({
      userId,
      token,
      expiresIn: new Date(Date.now() + 1000 * 86400 * 30),
    });
  }

  async function deleteByToken(token) {
    await refreshTokenRepository.deleteByToken(token);
  }

  return { createRefreshToken, deleteByToken };
}

module.exports = createRefreshTokenService;
