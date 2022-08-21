module.exports = ({ page, limit }) => {
  if (!limit) {
    return {};
  }

  const offset = page ? Math.max((page - 1) * limit, 0) : 0;

  return { offset: +offset, limit: +limit };
};
