const UserSchema = require('./user.schema.js');
const { isForbidden } = require('../../utils/database');

UserSchema.prototype.canAccessTag = function (tag) {
  isForbidden(tag.userId !== this.id);
};

UserSchema.prototype.canAccessNote = function (note) {
  isForbidden(note.userId !== this.id);
};

module.exports = UserSchema;
