function createTagService({ tagRepository }) {
  async function getAll(query) {
    return await tagRepository.getAll(query);
  }

  return { getAll };
}

module.exports = createTagService;
