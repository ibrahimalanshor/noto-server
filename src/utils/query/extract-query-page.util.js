module.exports = (query) => {
  return {
    page: {
      page: query.page,
      limit: query.limit,
    },
  };
};
