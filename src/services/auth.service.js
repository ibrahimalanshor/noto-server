const { UnauthorizedException } = require('../exceptions');
const { RegisterException, LoginException } = require('../exceptions/auth');

function createAuthService({
  userService,
  refreshTokenService,
  tokenService,
  passwordService,
}) {
  async function register(credential) {
    try {
      const user = await userService.createUser(credential);

      const token = await tokenService.generateAuthToken(user);

      return token;
    } catch (err) {
      throw new RegisterException(err);
    }
  }

  async function login(credential) {
    try {
      const user = await userService.findByEmail(credential.email);

      await passwordService.checkPassword(user.password, credential.password);

      const token = await tokenService.generateAuthToken(user);

      return token;
    } catch (err) {
      throw new LoginException(err);
    }
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
