const { Filter } = require('../utils/database');

function createTagRepository({ tagModel }) {
  async function getAll(query) {
    const filter = new Filter()
      .where('userId', query.userId)
      .search('name', query.name ?? '')
      .order(query.order)
      .paginate(query.page)
      .get();

    return await tagModel.findAndCountAll(filter);
  }

  return { getAll };
}

module.exports = createTagRepository;
