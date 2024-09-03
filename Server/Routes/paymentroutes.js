const express = require('express');
const router = express.Router();

const paymentController = require('../Controllers/paymentcontroller'); // Replace with the correct path to your matchController file

router.post('/create', paymentController.addPayment);


module.exports = router;
