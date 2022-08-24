const { isNotFound } = require('../utils/database');

function createTagRepository({ tagModel }) {
  async function getAll(query) {
    return await tagModel.findAll(query);
  }

  async function create(body) {
    return await tagModel.create(body);
  }

  async function count(query) {
    return await tagModel.count(query);
  }

  async function find(id, options = {}) {
    const tag = await tagModel.findByPk(id, options);

    isNotFound(tag);

    return tag;
  }

  async function update(tag, body) {
    await tag.update(body);

    return tag;
  }

  async function remove(tag) {
    await tag.destroy();

    return tag;
  }

  return { getAll, create, count, find, update, remove };
}

module.exports = createTagRepository;
