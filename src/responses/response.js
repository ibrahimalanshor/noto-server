function Response(status = 200, message = '', data = {}) {
  this.status = status;
  this.message = message;
  this.data = data;
}

Response.prototype.send = function (req, res) {
  return res.status(this.status).json({
    status: this.status,
    message: req.polyglot.to(this.message),
    data: this.data,
  });
};

module.exports = Response;
