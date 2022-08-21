const { SuccessResponse } = require('../responses');
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

      return new SuccessResponse('', { tags }).send(res);
    } catch (err) {
      next(err);
    }
  }

  return { get };
}

module.exports = createTagController;
