// routes/users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/:id', userController.getUserById);

// Add new user
router.post('/', userController.addUser);

// Update user by ID
router.put('/:id', userController.updateUser);

// Remove user by ID
router.delete('/:id', userController.removeUser);

// Remove all users
router.delete('/', userController.removeAllUsers);

module.exports = router;
