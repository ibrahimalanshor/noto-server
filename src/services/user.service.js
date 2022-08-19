function createUserService({ userRepository, passwordService }) {
  async function createUser(body) {
    const password = await passwordService.hashPassword(body.password);

    return await userRepository.create({
      ...body,
      password,
    });
  }

  return { createUser };
}

module.exports = createUserService;
