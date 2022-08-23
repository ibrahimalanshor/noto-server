const { Filter } = require('../utils/database');

function createTagService({ tagRepository }) {
  async function getAll(query) {
    const filter = new Filter()
      .where('userId', query.userId)
      .search('name', query.name ?? '')
      .order(query.order)
      .paginate(query.page)
      .get();

    return await tagRepository.getAll(filter);
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
