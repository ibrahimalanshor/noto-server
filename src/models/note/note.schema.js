const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

module.exports = sequelize.define(
  'note',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isFavorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isTrash: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'notes',
    timestamps: true,
    updatedAt: false,
  }
);
