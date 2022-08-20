function createUserService({ userRepository, passwordService }) {
  async function createUser(body) {
    const password = await passwordService.hashPassword(body.password);

    return await userRepository.create({
      ...body,
      password,
    });
  }

  async function findByEmail(email) {
    return await userRepository.findByEmail(email);
  }

  return { createUser, findByEmail };
}

module.exports = createUserService;
