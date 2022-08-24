const { Router } = require('express');
const createAuthRoute = require('./auth.route.js');
const createTagRoute = require('./tag.route.js');
const createNoteRoute = require('./note.route.js');
const createProfileRoute = require('./profile.route.js');

const router = Router();

createAuthRoute(router);
createTagRoute(router);
createNoteRoute(router);
createProfileRoute(router);

module.exports = router;
