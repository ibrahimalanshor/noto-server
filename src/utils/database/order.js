module.exports = (sort) => {
  return [
    sort?.column || 'id',
    sort?.direction?.toLowerCase() === 'desc' ? 'DESC' : 'ASC',
  ];
};
