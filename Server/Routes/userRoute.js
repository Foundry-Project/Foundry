const express = require('express');
// const router = express.Router();
// const usercontrollers = require('../Controllers/userscontroller');

// // Route to add a new user
// router.post('/add', usercontrollers.addUser);

// // Route to get all users
// router.get('/all', usercontrollers.getAllUsers);

// module.exports = router;

const {CreateUser, Login,DeleteUser,UpdateUser,GetallUsers,  GetoneUser} = require('../Controllers/userscontroller');

const router = express.Router();


router.post('/create', CreateUser);
router.post('/login', Login);
router.delete('/delete/:id',DeleteUser)
router.get('/getall',GetallUsers)
router.get('/getone/:id',GetoneUser)
router.put('/update/:id',UpdateUser)

module.exports = router;