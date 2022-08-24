const { Filter, count } = require('../utils/database');
const { NoteModel } = require('../models/note');

function createTagService({ tagRepository }) {
  async function getAll(query) {
    const filter = new Filter()
      .select(count('notes.tagId', 'notesCount'))
      .where('userId', query.userId)
      .search('name', query.name ?? '')
      .with({
        model: NoteModel,
        attributes: [],
      })
      .order(query.order)
      .paginate(query.page)
      .group('tag.id');

    const rows = await tagRepository.getAll(filter.get());
    const rowsCount = await tagRepository.count(
      filter.resetSelect().resetWith().resetGroup().get()
    );

    return { count: rowsCount, rows };
  }

  async function create(body) {
    return await tagRepository.create(body);
  }

  async function exists(name, userId, options = {}) {
    const filter = new Filter().where('name', name).where('userId', userId);

    if (options.excludeSelf) {
      filter.whereNot('id', options.id);
    }

    const count = await tagRepository.count(filter.get());

    return count >= 1;
  }

  async function find(id) {
    return await tagRepository.find(id);
  }

  async function update(tag, body) {
    return await tagRepository.update(tag, body);
  }

  async function remove(tag) {
    return await tagRepository.remove(tag);
  }

  return { getAll, create, exists, find, update, remove };
}

module.exports = createTagService;
