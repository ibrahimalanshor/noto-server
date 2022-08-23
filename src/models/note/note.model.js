const NoteSchema = require('./note.schema.js');
const { UserSchema } = require('../user');
const { TagSchema } = require('../tag');

NoteSchema.belongsTo(TagSchema, {
  foreignKey: 'tagId',
});

NoteSchema.belongsTo(UserSchema, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = NoteSchema;
