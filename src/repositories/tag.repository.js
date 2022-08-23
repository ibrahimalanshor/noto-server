const { isNotFound } = require('../utils/database');

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

  async function find(id) {
    const tag = await tagModel.findByPk(id);

    isNotFound(tag);

    return tag;
  }

  async function update(tag, body) {
    await tag.update(body);

    return tag;
  }

  return { getAll, create, count, find, update };
}

module.exports = createTagRepository;
