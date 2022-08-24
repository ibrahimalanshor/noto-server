const { fn, col } = require('sequelize');

module.exports = (name, alias) => [fn('COUNT', col(name)), alias];
