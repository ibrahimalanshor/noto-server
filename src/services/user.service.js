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

  async function findById(id) {
    return await userRepository.findById(id);
  }

  return { createUser, findByEmail, findById };
}

module.exports = createUserService;
