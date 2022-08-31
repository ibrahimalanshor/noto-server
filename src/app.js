const express = require('express');
const locale = require('express-locale');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { createHandleError, createPolyglot } = require('./common');

function createApp(config = {}) {
  const { middlewares = [], routes = [] } = config;
  const app = express();

  app.set('port', config.port || 4000);
  app.set('env', config.env || 'development');

  app.use(cors());
  app.use(helmet());
  app.use(morgan(app.get('env') === 'development' ? 'dev' : 'combined'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(locale());

  app.use(createPolyglot());

  for (const middleware of middlewares) {
    app.use(middleware);
  }

  app.use(routes);

  app.use(
    createHandleError({
      logging: app.get('env') === 'development',
    })
  );

  function run(cb) {
    const port = app.get('port');

    app.listen(port, () =>
      cb ? cb(port) : console.log(`server running at ${port}`)
    );
  }

  return {
    app,
    run,
  };
}

module.exports = createApp;
