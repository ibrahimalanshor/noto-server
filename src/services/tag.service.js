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

  async function exists(name, userId) {
    const filter = new Filter()
      .where('name', name)
      .where('userId', userId)
      .get();

    const count = await tagRepository.count(filter);

    return count >= 1;
  }

  return { getAll, create, exists };
}

module.exports = createTagService;
