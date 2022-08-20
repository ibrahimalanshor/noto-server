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

  async function findByToken(token) {
    const refreshToken = await refreshTokenRepository.findByToken(token);

    if (new Date() > new Date(refreshToken.expiresIn)) {
      throw new Error();
    }

    return await refreshTokenRepository.findByToken(token);
  }

  return { createRefreshToken, deleteByToken, findByToken };
}

module.exports = createRefreshTokenService;
