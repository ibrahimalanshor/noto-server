const Response = require('./response.js');

function CreatedResponse(message = '', data = {}) {
  Response.call(this, 201, message, data);
}

CreatedResponse.prototype = Object.create(Response.prototype, {
  constructor: {
    value: CreatedResponse,
  },
});

module.exports = CreatedResponse;
