const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');


// Route to create a new thought
router.post('/', thoughtController.createThoughtById);

// Route to get all thoughts
router.get('/', thoughtController.getAllThoughts);

// Route to get a single thought by ID
router.get('/:id', thoughtController.getThoughtById);

// Route to update a thought by ID
router.put('/:id', thoughtController.updateThoughtById);

// Route to delete a thought by ID
router.delete('/:id', thoughtController.deleteThoughtById);

module.exports = router;

