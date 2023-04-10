const express = require('express');
const thoughtsRoutes = require('./thoughts');
const reactionsRoutes = require('./reactions');
const userRoutes = require('./users');

const router = express.Router();

// Mount thoughts routes on /thoughts
router.use('/thoughts', thoughtsRoutes);

// Mount reactions routes on /reactions
router.use('/reaction', reactionsRoutes);

// Mount user routes on /users
router.use('/users', userRoutes);

module.exports = router;

