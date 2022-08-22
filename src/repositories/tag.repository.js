function createTagRepository({ tagModel }) {
  async function getAll(query) {
    return await tagModel.findAndCountAll(query);
  }

  async function create(body) {
    return await tagModel.create(body);
  }

  async function count(query) {
    return await tagModel.count(query);
  }

  return { getAll, create, count };
}

module.exports = createTagRepository;
