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

  return { create, deleteByUserId, deleteByToken };
}

module.exports = createRefreshTokenRepository;
