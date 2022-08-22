function Response(status = 200, message = '', data = {}) {
  this.status = status;
  this.response = {
    status: this.status,
    message,
    data,
  };
}

Response.prototype.send = function (res) {
  return res.status(this.status).json(this.response);
};

module.exports = Response;
