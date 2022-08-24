const { Op } = require('sequelize');
const searching = require('./search.js');
const ordering = require('./order.js');
const paginating = require('./paginate.js');

function Filter(config = {}) {
  this.query = {
    where: {},
    order: [],
    include: [],
    attributes: {
      include: [],
      exclude: [],
    },
    group: [],
  };
}

Filter.prototype.select = function (col) {
  this.query.attributes.include.push(col);

  return this;
};

Filter.prototype.hide = function (col) {
  this.query.attributes.exclude.push(col);
};

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

Filter.prototype.group = function (col) {
  this.query.group.push(col);

  return this;
};

Filter.prototype.get = function () {
  return {
    ...(Object.keys(this.query.where).length
      ? { where: this.query.where }
      : {}),
    ...(this.query.order.length ? { order: this.query.order } : {}),
    ...(this.query.include.length ? { include: this.query.include } : {}),
    ...(this.query.group.length ? { group: this.query.group } : {}),
    attributes: {
      ...(this.query.attributes.include.length
        ? { include: this.query.attributes.include }
        : {}),
      ...(this.query.attributes.exclude.length
        ? { exclude: this.query.attributes.exclude }
        : {}),
    },
  };
};

Filter.prototype.resetSelect = function () {
  this.query.attributes.include = [];
  this.query.attributes.exclude = [];

  return this;
};

Filter.prototype.resetWith = function () {
  this.query.include = [];

  return this;
};

Filter.prototype.resetGroup = function () {
  this.query.group = [];

  return this;
};

module.exports = Filter;
