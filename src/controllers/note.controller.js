const { SuccessResponse, CreatedResponse } = require('../responses');
const { extractQueryPage, extractQueryOrder } = require('../utils/query');

function createNoteController({ noteService, tagService }) {
  async function get(req, res, next) {
    try {
      const notes = await noteService.getAll({
        userId: req.user.id,
        name: req.query.name,
        isTrash: req.query.isTrash,
        isFavorite: req.query.isFavorite,
        tagId: req.query.tagId,
        ...extractQueryOrder(req.query),
        ...extractQueryPage(req.query),
      });

      return new SuccessResponse('', notes).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function create(req, res, next) {
    try {
      if (req.body.tagId) {
        const tag = await tagService.find(req.body.tagId);

        req.user.canAccessTag(tag);
      }

      const note = await noteService.create({
        ...req.body,
        userId: req.user.id,
      });

      return new CreatedResponse('', note).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function update(req, res, next) {
    try {
      if (req.body.tagId) {
        const tag = await tagService.find(req.body.tagId);

        req.user.canAccessTag(tag);
      }

      const note = await noteService.find(req.params.id);

      req.user.canAccessNote(note);

      await noteService.update(note, req.body);

      return new SuccessResponse('', note).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function updateFavorite(req, res, next) {
    try {
      const note = await noteService.find(req.params.id);

      req.user.canAccessNote(note);

      await noteService.update(note, {
        isFavorite: req.body.isFavorite,
      });

      return new SuccessResponse('', note).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function updateTrash(req, res, next) {
    try {
      const note = await noteService.find(req.params.id);

      req.user.canAccessNote(note);

      await noteService.update(note, {
        isTrash: req.body.isTrash,
      });

      return new SuccessResponse('', note).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function find(req, res, next) {
    try {
      const note = await noteService.getOne(req.params.id);

      req.user.canAccessNote(note);

      return new SuccessResponse('', note).send(res);
    } catch (err) {
      next(err);
    }
  }

  async function remove(req, res, next) {
    try {
      const note = await noteService.find(req.params.id);

      req.user.canAccessNote(note);

      await noteService.remove(note);

      return new SuccessResponse('', note).send(res);
    } catch (err) {
      next(err);
    }
  }

  return { get, create, update, updateFavorite, updateTrash, find, remove };
}

module.exports = createNoteController;
