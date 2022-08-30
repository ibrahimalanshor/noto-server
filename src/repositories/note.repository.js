const { isNotFound } = require('../utils/database');

function createNoteRepository({ noteModel }) {
  async function getAll(query) {
    return await noteModel.findAndCountAll(query);
  }

  async function create(body) {
    return await noteModel.create(body);
  }

  async function count(query) {
    return await noteModel.count(query);
  }

  async function find(id, options = {}) {
    const note = await noteModel.findByPk(id, options);

    isNotFound(note);

    return note;
  }

  async function update(note, body) {
    await note.update(body);

    return note;
  }

  async function remove(note) {
    await note.destroy();

    return note;
  }

  async function clearTrash(userId) {
    await noteModel.destroy({
      where: {
        userId,
        isTrash: true,
      },
    });
  }

  return { getAll, create, count, find, update, remove, clearTrash };
}

module.exports = createNoteRepository;
