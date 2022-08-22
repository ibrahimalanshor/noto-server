const Response = require('./response.js');

function SuccessReponse(message = '', data = {}) {
  Response.call(this, 200, message, data);
}

SuccessReponse.prototype = Object.create(Response.prototype, {
  constructor: {
    value: SuccessReponse,
  },
});

module.exports = SuccessReponse;
