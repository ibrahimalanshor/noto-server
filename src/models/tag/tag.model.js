const TagSchema = require('./tag.schema.js');
const { UserSchema } = require('../user');
const NoteSchema = require('../note/note.schema.js');

TagSchema.belongsTo(UserSchema, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

TagSchema.hasMany(NoteSchema, {
  foreignKey: 'tagId',
});

module.exports = TagSchema;
