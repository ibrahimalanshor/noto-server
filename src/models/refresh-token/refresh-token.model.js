const RefreshTokenSchema = require('./refresh-token.schema.js');
const { UserSchema } = require('../user');

RefreshTokenSchema.belongsTo(UserSchema, {
  onDelete: 'CASCADE',
  foreignKey: 'userId',
});

module.exports = RefreshTokenSchema;
