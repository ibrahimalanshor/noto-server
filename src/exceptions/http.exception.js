class HttpException extends Error {
  constructor(status, name, message, errors) {
    super(message);

    this.name = name;
    this.status = status || 400;
    this.errors = errors;
  }
}

module.exports = HttpException;
