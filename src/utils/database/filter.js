const { Op } = require('sequelize');
const searching = require('./search.js');
const ordering = require('./order.js');
const paginating = require('./paginate.js');

function Filter(config = {}) {
  this.query = {
    where: {},
    order: [],
    include: [],
  };
}

Filter.prototype.where = function (column, val) {
  this.query.where[column] = val;

  return this;
};

Filter.prototype.whereNot = function (column, val) {
  this.where(column, {
    [Op.ne]: val,
  });

  return this;
};

Filter.prototype.search = function (column, text) {
  this.where(column, {
    ...searching(text),
  });

  return this;
};

Filter.prototype.order = function (options) {
  this.query.order.push(ordering(options));

  return this;
};

Filter.prototype.paginate = function (options) {
  const page = paginating(options);

  this.query.offset = page.offset;
  this.query.limit = page.limit;

  return this;
};

Filter.prototype.with = function (model) {
  this.query.include.push(model);

  return this;
};

Filter.prototype.get = function () {
  return this.query;
};

module.exports = Filter;
