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
  }
  const getNotificationsByUserId = async (req, res) => {
    try {
      // Extract the userId from the request parameters
      const userId = req.params.userId;
  
      // Fetch the notifications from the database by userId and where seen is false
      const notifications = await Notification.findAll({
        where: {
          userId: userId,
          seen: false, // Add condition to fetch only unseen notifications
        },
      });
  
      // Send the notifications or an empty array as a JSON response
      res.status(200).json(notifications);
  
    } catch (error) {
      console.error('Error fetching notifications:', error);
      res.status(500).json({ error: 'An error occurred while fetching notifications.' });
    }
  };
  
    
  const updateNotificationUserId = async (req, res) => {
    const { id } = req.params; // Extract the notification ID from the request parameters
  const { userId, postId } = req.body; // Extract userId and postId from the request body

  try {
    // Find the notification by ID
    const notification = await Notification.findByPk(id);

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found.' });
    }

    // Update the notification's userId if provided
    if (userId !== undefined) {
      notification.userId = userId;
    }

    // Update the notification's postId if provided
    if (postId !== undefined) {
      notification.postId = postId;
    }

    // Save the updated notification
    await notification.save();

    // Send the updated notification as a JSON response
    res.json(notification);
  } catch (error) {
    console.error('Error updating notification:', error);
    res.status(500).json({ error: 'An error occurred while updating the notification.' });
  }
}
const deleteNotification = async (req, res) => {
  const { id } = req.params; // Extract notification ID from request parameters

  try {
    // Find the notification by ID
    const notification = await Notification.findByPk(id);

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found.' });
    }

    // Delete the notification
    await notification.destroy();
    res.json({ message: 'Notification deleted successfully.' });
  } catch (error) {
    console.error('Error deleting notification:', error);
    res.status(500).json({ error: 'An error occurred while deleting the notification.' });
  }
};

// Function to update a notification
const updateNotification = async (req, res) => {
  const { id } = req.params; // Extract the notification ID from the request parameters
  const { content, seen,userId } = req.body; // Extract the fields to update from the request body

  try {
    // Find the notification by ID
    const notification = await Notification.findByPk(id);

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found.' });
    }

    // Update the notification's fields if provided
    if (content !== undefined) {
      notification.content = content;
    }
    if (seen !== undefined) {
      notification.seen = seen;
    }
    if (userId !== undefined) {
      notification.userId = userId;
    }
    // Save the updated notification
    await notification.save();

    // Send the updated notification as a JSON response
    res.json(notification);
  } catch (error) {
    console.error('Error updating notification:', error);
    res.status(500).json({ error: 'An error occurred while updating the notification.' });
  }
};




module.exports = { getAllNotifications,getNotificationById,getNotificationsByUserId ,updateNotificationUserId,deleteNotification,updateNotification};
