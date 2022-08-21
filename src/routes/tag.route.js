const { requireAuth } = require('../middlewares');
const { createTagController } = require('../controllers');
const { createRequestValidator } = require('../helpers');
const { createTagRepository } = require('../repositories/');
const { createTagService } = require('../services');
const { TagModel } = require('../models/tag');

function createTagRoute(router) {
  const tagRepository = createTagRepository({ tagModel: TagModel });
  const tagService = createTagService({ tagRepository });
  const tagController = createTagController({ tagService });

  router.get('/', requireAuth, tagController.get);

  return {
    path: '/tags',
    router,
  };
}

module.exports = createTagRoute;
