const jwt = require('jsonwebtoken');
const config = require('../../../config');

function createTokenService({ refreshTokenService }) {
  async function generateAccessToken(payload) {
    return await jwt.sign(payload, config.app.key, {
      expiresIn: config.auth.accessTokenExpire,
    });
  }

  async function generateRefreshToken(payload) {
    return await jwt.sign(payload, config.app.key, {
      expiresIn: config.auth.refreshTokenExpire,
    });
  }

  async function generateAuthToken(user) {
    const accessToken = await generateAccessToken({ id: user.id });
    const refreshTokenSaved = await refreshTokenService.createRefreshToken(
      user.id
    );
    const refreshToken = await generateRefreshToken({
      id: user.id,
      token: refreshTokenSaved.token,
    });

    return { accessToken, refreshToken };
  }

  return { generateAccessToken, generateRefreshToken, generateAuthToken };
}

module.exports = createTokenService;
