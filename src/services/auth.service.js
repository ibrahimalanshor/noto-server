const { UnauthorizedException } = require('../exceptions');

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
      throw new UnauthorizedException();
    }
  }

  async function login(credential) {
    try {
      const user = await userService.findByEmail(credential.email);

      await passwordService.checkPassword(user.password, credential.password);

      const token = await tokenService.generateAuthToken(user);

      return token;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  async function logout(refreshToken) {
    try {
      await refreshTokenService.deleteByToken(refreshToken);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  return { register, login, logout };
}

module.exports = createAuthService;
