const { Op } = require('sequelize');

module.exports = (text) => {
  return {
    [Op.substring]: text,
  };
};
