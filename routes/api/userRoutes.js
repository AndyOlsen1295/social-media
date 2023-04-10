const express = require('express');
const router = express.Router();
const userController  = require('../../controllers/userController');


// GET all users
router.get('/', userController.getAllUsers);

// GET user by id
router.get('/:id', userController.getUserById);

// POST a new user
router.post('/', userController.createUser);

// PUT update user by id
router.put('/:id', userController.updateUser);

// DELETE user by id
router.delete('/:id', userController.deleteUserById);


module.exports = router;
