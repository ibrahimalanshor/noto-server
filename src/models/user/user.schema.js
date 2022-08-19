const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

module.exports = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  }
);
