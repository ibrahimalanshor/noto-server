const { ForbiddenException } = require('../../exceptions');

module.exports = (cond) => {
  if (cond) throw new ForbiddenException();
};
