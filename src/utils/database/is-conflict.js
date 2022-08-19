const { UniqueConstraintError } = require('sequelize');
const { ConflictException } = require('../../exceptions');

module.exports = (err) => {
  if (err instanceof UniqueConstraintError) {
    throw new ConflictException('User already exists');
  }
};
