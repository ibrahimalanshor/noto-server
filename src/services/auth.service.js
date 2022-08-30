const { UnauthorizedException } = require('../exceptions');

function createAuthService({
  userService,
  refreshTokenService,
  tokenService,
  passwordService,
}) {
  async function register(credential) {
    const user = await userService.createUser(credential);

    const token = await tokenService.generateAuthToken(user);

    return token;
  }

  async function login(credential) {
    const user = await userService.findByEmail(credential.email);

    try {
      await passwordService.checkPassword(user.password, credential.password);
    } catch (err) {
      throw new UnauthorizedException();
    }

    const token = await tokenService.generateAuthToken(user);

    return token;
  }

  async function logout(refreshToken) {
    try {
      await refreshTokenService.deleteByToken(refreshToken);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  async function refreshToken(token) {
    try {
      const refreshTokenSaved = await refreshTokenService.findByToken(token);
      const accessToken = await tokenService.generateAccessToken({
        id: refreshTokenSaved.userId,
      });

      return accessToken;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  return { register, login, logout, refreshToken };
}

module.exports = createAuthService;
