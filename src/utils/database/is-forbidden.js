const { ForbiddenException } = require('../../exceptions');

module.exports = (cond, msg) => {
  if (cond) throw new ForbiddenException(msg);
};
