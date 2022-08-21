const { Router } = require('express');
const createAuthRoute = require('./auth.route.js');
const createTagRoute = require('./tag.route.js');

const router = Router();

module.exports = [createAuthRoute(router), createTagRoute(router)];
