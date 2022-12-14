const { SuccessResponse, CreatedResponse } = require('../responses');
const { extractQueryPage, extractQueryOrder } = require('../utils/query');

function createTagController({ tagService }) {
  async function get(req, res, next) {
    try {
      const tags = await tagService.getAll({
        userId: req.user.id,
        name: req.query.name,
        ...extractQueryOrder(req.query),
        ...extractQueryPage(req.query),
      });

      return new SuccessResponse('', tags).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  async function create(req, res, next) {
    try {
      const tag = await tagService.create({
        ...req.body,
        userId: req.user.id,
      });

      return new CreatedResponse('tag.created', tag).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  async function update(req, res, next) {
    try {
      const tag = await tagService.find(req.params.id);

      req.user.canAccessTag(tag);

      await tagService.update(tag, req.body);

      return new SuccessResponse('tag.updated', tag).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  async function find(req, res, next) {
    try {
      const tag = await tagService.find(req.params.id);

      req.user.canAccessTag(tag);

      return new SuccessResponse('', tag).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  async function remove(req, res, next) {
    try {
      const tag = await tagService.find(req.params.id);

      req.user.canAccessTag(tag);

      await tagService.remove(tag);

      return new SuccessResponse('tag.deleted', tag).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return { get, create, update, find, remove };
}

module.exports = createTagController;
