module.exports = (query) => {
  return {
    order: {
      column: query.sort,
      direction: query.order,
    },
  };
};
