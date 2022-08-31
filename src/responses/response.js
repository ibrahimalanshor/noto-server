function Response(status = 200, message = '', data = {}) {
  this.status = status;
  this.message = message;
  this.data = data;
}

Response.prototype.send = function (req, res) {
  return res.status(this.status).json({
    status: this.status,
    message: req.polyglot.t(
      this.message || `http_status.${this.status.toString().toLowerCase()}`
    ),
    data: this.data,
  });
};

module.exports = Response;
