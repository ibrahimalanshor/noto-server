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

  router.get('/tags', requireAuth, tagController.get);
  router.post(
    '/tags',
    requireAuth,
    createRequestValidator(tagCreateRequest.rules),
    tagController.create
  );

  router.get('/tags/:id', requireAuth, tagController.find);
  router.patch(
    '/tags/:id',
    requireAuth,
    createRequestValidator(tagUpdateRequest.rules),
    tagController.update
  );
  router.delete('/tags/:id', requireAuth, tagController.remove);
}

module.exports = createTagRoute;
