const { UnauthorizedException } = require('../exceptions');

function createAuthService({ userService, tokenService, passwordService }) {
  async function register(credential) {
    const user = await userService.createUser(credential);

    const token = await tokenService.generateAuthToken(user);

    return token;
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

  return { register, login };
}

module.exports = createAuthService;
