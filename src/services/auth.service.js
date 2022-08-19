function createAuthService({ userService, tokenService, passwordService }) {
  async function register(credential) {
    const user = await userService.createUser(credential);

    const token = await tokenService.generateAuthToken(user);

    return token;
  }

  async function login(credential) {
    const user = await userService.findByEmail(credential.email);

    await passwordService.checkPassword(user.password, credential.password);

    const token = await tokenService.generateAuthToken(user);

    return token;
  }

  return { register, login };
}

module.exports = createAuthService;
