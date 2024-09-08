// routes/notificationRoutes.js
const express = require('express');
const notificationController = require('../Controllers/notificationcontroller');

const router = express.Router();

// Define a route to get all notifications
router.get('/notifications', notificationController.getAllNotifications);

router.get('/notifications/:userId', notificationController.getNotificationsByUserId);

router.put('/notifications/:id', notificationController.updateNotificationUserId);
 
router.delete('/notifications/:id', notificationController.deleteNotification);

router.put('/updatenotif/:id', notificationController.updateNotification);


module.exports = router;