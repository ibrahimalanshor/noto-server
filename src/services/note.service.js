const { Filter } = require('../utils/database');
const { isUndefined, stringToBoolean } = require('../utils');

function createNoteService({ noteRepository }) {
  async function getAll(query) {
    const filter = new Filter()
      .where('userId', query.userId)
      .search('name', query.name ?? '')
      .with('tag')
      .order(query.order)
      .paginate(query.page);

    if (!isUndefined(query.isTrash)) {
      filter.where('isTrash', stringToBoolean(query.isTrash));
    }

    return await noteRepository.getAll(filter.get());
  }

  async function getOne(id) {
    const filter = new Filter().with('tag').get();

    return await noteRepository.find(id, filter);
  }

  async function create(body) {
    return await noteRepository.create(body);
  }

  async function find(id) {
    return await noteRepository.find(id);
  }

  async function update(note, body) {
    return await noteRepository.update(note, body);
  }

  async function remove(note) {
    return await noteRepository.remove(note);
  }

  return { getAll, getOne, create, find, update, remove };
}

module.exports = createNoteService;
