const TagSchema = require('./tag.schema.js');
const { UserSchema } = require('../user');

TagSchema.belongsTo(UserSchema, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = TagSchema;
