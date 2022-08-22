const { requireAuth } = require('../middlewares');
const { createTagController } = require('../controllers');
const { createRequestValidator } = require('../helpers');
const { createTagRepository } = require('../repositories/');
const { createTagService } = require('../services');
const { createTagCreateRequest } = require('../requests/tag');
const { TagModel } = require('../models/tag');

function createTagRoute(router) {
  const tagRepository = createTagRepository({ tagModel: TagModel });
  const tagService = createTagService({ tagRepository });
  const tagController = createTagController({ tagService });

  const tagCreateRequest = createTagCreateRequest({ tagService });

  router
    .route('/')
    .get(requireAuth, tagController.get)
    .post(
      requireAuth,
      createRequestValidator(tagCreateRequest.rules),
      tagController.create
    );

  return {
    path: '/tags',
    router,
  };
}

module.exports = createTagRoute;
