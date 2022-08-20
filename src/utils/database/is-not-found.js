const { NotFoundException } = require('../../exceptions');

module.exports = (resource) => {
  if (resource === null) {
    throw new NotFoundException();
  }
};
