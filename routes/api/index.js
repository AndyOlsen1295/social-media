const express = require('express');
const thoughtRoutes = require('./thoughtRoutes');
const reactionsRoutes = require('./reactions');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Mount thoughts routes on /thoughts
router.use('/thoughtController', thoughtRoutes);

// Mount reactions routes on /reactions
router.use('/reactions', reactionsRoutes);

// Mount user routes on /users
router.use('/userController', userRoutes);

module.exports = router;
