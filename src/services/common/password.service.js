const bcrypt = require('bcrypt');

function createPasswordService() {
  async function hashPassword(plain) {
    return await bcrypt.hash(plain, 10);
  }

  async function checkPassword(crypted, plain) {
    return await bcrypt.compare(plain, crypted);
  }

  return { checkPassword, hashPassword };
}

module.exports = createPasswordService;
