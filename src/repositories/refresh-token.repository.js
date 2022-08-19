function createRefreshTokenRepository({ refreshTokenModel }) {
  async function create(body) {
    return await refreshTokenModel.create(body);
  }

  return { create };
}

module.exports = createRefreshTokenRepository;
