const { requireAuth } = require('../middlewares');
const { createTagController } = require('../controllers');
const { createRequestValidator } = require('../helpers');
const { createTagRepository } = require('../repositories/');
const { createTagService } = require('../services');
const {
  createTagCreateRequest,
  createTagUpdateRequest,
} = require('../requests/tag');
const { TagModel } = require('../models/tag');

function createTagRoute(router) {
  const tagRepository = createTagRepository({ tagModel: TagModel });
  const tagService = createTagService({ tagRepository });
  const tagController = createTagController({ tagService });

  const tagCreateRequest = createTagCreateRequest({ tagService });
  const tagUpdateRequest = createTagUpdateRequest({ tagService });

  router
    .route('/')
    .get(requireAuth, tagController.get)
    .post(
      requireAuth,
      createRequestValidator(tagCreateRequest.rules),
      tagController.create
    );

  router
    .route('/:id')
    .get(requireAuth, tagController.find)
    .patch(
      requireAuth,
      createRequestValidator(tagUpdateRequest.rules),
      tagController.update
    )
    .delete(requireAuth, tagController.remove);

  return {
    path: '/tags',
    router,
  };
}

module.exports = createTagRoute;
