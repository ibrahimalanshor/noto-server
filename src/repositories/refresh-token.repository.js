function createRefreshTokenRepository({ refreshTokenModel }) {
  async function create(body) {
    return await refreshTokenModel.create(body);
  }

  async function deleteByUserId(userId) {
    return await refreshTokenModel.destroy({ where: { userId } });
  }

  return { create, deleteByUserId };
}

module.exports = createRefreshTokenRepository;
