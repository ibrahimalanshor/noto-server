const { isNotFound } = require('../utils/database');

function createRefreshTokenRepository({ refreshTokenModel }) {
  async function create(body) {
    return await refreshTokenModel.create(body);
  }

  async function deleteByUserId(userId) {
    return await refreshTokenModel.destroy({ where: { userId } });
  }

  async function deleteByToken(token) {
    return await refreshTokenModel.destroy({ where: { token } });
  }

  async function findByToken(token) {
    const refreshToken = await refreshTokenModel.findOne({ where: { token } });

    isNotFound(refreshToken);

    return refreshToken;
  }

  return { create, deleteByUserId, deleteByToken, findByToken };
}

module.exports = createRefreshTokenRepository;
