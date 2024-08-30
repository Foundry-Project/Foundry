const express = require('express');
const {CreateUser, Login,AdminLogin,DeleteUser,UpdateUser,GetallUsers,GetallAdmins , GetoneUser,UpdateAdmin,DeleteAdmin} = require('../Controllers/usercontroller');

const router = express.Router();


router.post('/create', CreateUser);
router.post('/login', Login);
router.get('/adminlogin',AdminLogin);
router.delete('/delete/:id',DeleteUser)
router.get('/getall',GetallUsers)
router.get('/getalladmins', GetallAdmins);
router.put('/updateadmin/:id', UpdateAdmin);
router.delete('/delete/:id', DeleteAdmin);
router.get('/getone/:id',GetoneUser)
router.put('/update/:id',UpdateUser)

module.exports = router;