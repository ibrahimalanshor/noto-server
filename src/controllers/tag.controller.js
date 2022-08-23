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

      return new SuccessResponse('', tags).send(res);
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

      return new CreatedResponse('', tag).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function update(req, res, next) {
    try {
      const tag = await tagService.find(req.params.id);

      req.user.canAccessTag(tag);

      await tagService.update(tag, req.body);

      return new SuccessResponse('', tag).send(res);
    } catch (err) {
      next(err);
    }
  }

  return { get, create, update };
}

module.exports = createTagController;
