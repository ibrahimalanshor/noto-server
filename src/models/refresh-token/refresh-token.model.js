const RefreshTokenSchema = require('./refresh-token.schema.js');
const { UserSchema } = require('../user');

RefreshTokenSchema.belongsTo(UserSchema, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = RefreshTokenSchema;
