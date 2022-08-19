function SuccessReponse(message = '', data = {}) {
  this.status = 200;
  this.response = {
    status: this.status,
    message,
    data,
  };

  this.send = (res) => {
    return res.status(this.status).json(this.response);
  };

  return this;
}

module.exports = SuccessReponse;
