const { UniqueConstraintError } = require('sequelize');
const { ConflictException } = require('../../exceptions');

module.exports = (err, msg = '') => {
  if (err instanceof UniqueConstraintError) {
    throw new ConflictException(msg);
  }
};
