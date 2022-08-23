const { requireAuth } = require('../middlewares');
const { createNoteController } = require('../controllers');
const { createRequestValidator } = require('../helpers');
const {
  createTagRepository,
  createNoteRepository,
} = require('../repositories/');
const { createTagService, createNoteService } = require('../services');
const {
  createNoteCreateRequest,
  createNoteUpdateRequest,
  createNoteUpdateFavoriteRequest,
} = require('../requests/note');
const { TagModel } = require('../models/tag');
const { NoteModel } = require('../models/note');

function createNoteRoute(router) {
  const tagRepository = createTagRepository({ tagModel: TagModel });
  const tagService = createTagService({ tagRepository });

  const noteRepository = createNoteRepository({ noteModel: NoteModel });
  const noteService = createNoteService({ noteRepository });

  const noteController = createNoteController({ noteService, tagService });

  const noteCreateRequest = createNoteCreateRequest();
  const noteUpdateRequest = createNoteUpdateRequest();
  const noteUpdateFavoriteRequest = createNoteUpdateFavoriteRequest();

  router.get('/notes', requireAuth, noteController.get);
  router.post(
    '/notes',
    requireAuth,
    createRequestValidator(noteCreateRequest.rules),
    noteController.create
  );

  router.get('/notes/:id', requireAuth, noteController.find);
  router.patch(
    '/notes/:id',
    requireAuth,
    createRequestValidator(noteUpdateRequest.rules),
    noteController.update
  );
  router.delete('/notes/:id', requireAuth, noteController.remove);

  router.patch(
    '/notes/:id/is-favorite',
    requireAuth,
    createRequestValidator(noteUpdateFavoriteRequest.rules),
    noteController.updateFavorite
  );
}

module.exports = createNoteRoute;
