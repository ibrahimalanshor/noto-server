const searching = require('./search.js');
const ordering = require('./order.js');
const paginating = require('./paginate.js');

module.exports = function Filter(config = {}) {
  this.query = {
    where: {},
    order: [],
  };

  this.where = function (column, val) {
    this.query.where[column] = val;

    return this;
  };

  this.search = function (column, text) {
    this.where(column, {
      ...searching(text),
    });

    return this;
  };

  this.order = function (options) {
    this.query.order.push(ordering(options));

    return this;
  };

  this.paginate = function (options) {
    const page = paginating(options);

    this.query.offset = page.offset;
    this.query.limit = page.limit;

    return this;
  };

  this.get = function () {
    return this.query;
  };
};
