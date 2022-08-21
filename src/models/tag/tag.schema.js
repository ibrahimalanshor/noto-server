const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

module.exports = sequelize.define(
  'tag',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: DataTypes.ENUM(
      'primary',
      'dark',
      'warning',
      'danger',
      'success',
      'info'
    ),
  },
  {
    tableName: 'tags',
    timestamps: false,
  }
);
