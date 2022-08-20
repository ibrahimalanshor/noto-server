const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

module.exports = sequelize.define(
  'refresh-token',
  {
    token: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'refresh_tokens',
    timestamps: false,
  }
);
