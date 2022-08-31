const { NotFoundException } = require('../../exceptions');

module.exports = (resource, msg = '') => {
  if (resource === null) {
    throw new NotFoundException(msg);
  }
};
