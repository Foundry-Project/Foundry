const { Notification } = require('../Database/index');

const getAllNotifications = async (req, res) => {
  try {
    // Fetch all notifications from the database
    const notifications = await Notification.findAll();
    
    // Send the notifications as a JSON response
    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'An error occurred while fetching notifications.' });
  }
};
const getNotificationById = async (req, res) => {
    try {
      // Extract the ID from the request parameters
      const notificationId = req.params.id;
      
      // Fetch the notification from the database by ID
      const notification = await Notification.findByPk(notificationId);
      
      // Check if the notification exists
      if (notification) {
        // Send the notification as a JSON response
        res.json(notification);
      } else {
        // Send a 404 response if the notification was not found
        res.status(404).json({ error: 'Notification not found' });
      }
    } catch (error) {
      console.error('Error fetching notification:', error);
      res.status(500).json({ error: 'An error occurred while fetching the notification.' });
    }
  };

  const getNotificationsByUserId = async (req, res) => {
    try {
      // Extract the userId from the request parameters
      const userId = req.params.userId;
      
      // Fetch the notifications from the database by userId
      const notifications = await Notification.findAll({
        where: { userId: userId }
      });
      
      // Check if any notifications exist for the given userId
      if (notifications.length > 0) {
        // Send the notifications as a JSON response
        res.json(notifications);
      } else {
        // Send a 404 response if no notifications were found
        res.status(404).json({ error: 'No notifications found for this user' });
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
      res.status(500).json({ error: 'An error occurred while fetching notifications.' });
    }
  };
  const updateNotificationUserId = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
  
    try {
      // Find the notification by ID
      const notification = await Notification.findByPk(id);
      
      if (!notification) {
        return res.status(404).json({ error: 'Notification not found.' });
      }
  
      // Update the notification's userId
      notification.userId = userId;
      await notification.save();
  
      // Send the updated notification as a JSON response
      res.json(notification);
    } catch (error) {
      console.error('Error updating notification userId:', error);
      res.status(500).json({ error: 'An error occurred while updating the notification.' });
    }
  };

module.exports = { getAllNotifications,getNotificationById,getNotificationsByUserId ,updateNotificationUserId};
