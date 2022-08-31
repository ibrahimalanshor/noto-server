const Polyglot = require('node-polyglot');
const messages = require('../../i18n');

function createPolyglot() {
  return (req, res, next) => {
    req.polyglot = new Polyglot();
    req.polyglot.extend(messages[req.locale.language] ?? messages.en);

    next();
  };
}

module.exports = createPolyglot;
