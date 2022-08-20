const bcrypt = require('bcrypt');

function createPasswordService() {
  async function hashPassword(plain) {
    return await bcrypt.hash(plain, 10);
  }

  async function checkPassword(crypted, plain) {
    const match = await bcrypt.compare(plain, crypted);

    if (!match) throw new Error();

    return match;
  }

  return { checkPassword, hashPassword };
}

module.exports = createPasswordService;
