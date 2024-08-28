const express = require('express');
const router = express.Router();
const usercontrollers = require('../Controllers/userscontroller');

// Route to add a new user
router.post('/add', usercontrollers.addUser);

// Route to get all users
router.get('/all', usercontrollers.getAllUsers);

module.exports = router;
