const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Add routes for user management
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/users', authController.getAllUsers); // New route for fetching all users
router.post('/create', authController.createUser); // New route to post a user to the backend

module.exports = router;
