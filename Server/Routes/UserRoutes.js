const express = require('express');
const {CreateUser, Login,DeleteUser,UpdateUser,GetallUsers,GetoneUser,GetallAdmins,UpdateAdmin,DeleteAdmin,loginAdmin} = require('../Controllers/usercontroller');

const router = express.Router();


router.post('/create', CreateUser);
router.post('/login', Login);
router.delete('/delete/:id',DeleteUser)
router.get('/getall',GetallUsers)
router.get('/getone/:id',GetoneUser)
router.put('/update/:id',UpdateUser)
router.get('/getalladmins', GetallAdmins);
router.put('/updateadmin/:id', UpdateAdmin);
router.delete('/delete/:id', DeleteAdmin);
router.post('/adminlogin', loginAdmin);

module.exports = router;