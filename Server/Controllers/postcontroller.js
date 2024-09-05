


const { Post, User, Notification } = require('../Database/index'); // Import models
const { Op } = require('sequelize'); // Import Sequelize operators

// Helper function to create a notification
async function createNotification(userId, content) {
  try {
    console.log(`Creating notification for user ${userId} with content: ${content}`);
    await Notification.create({
      userId,
      content,
      date: new Date(),
    });
    console.log(`Notification created for user ${userId}: ${content}`);
  } catch (error) {
    console.error('Error creating notification:', error);
  }
}

// Function to calculate similarity between two strings
function getSimilarity(str1, str2) {
  const words1 = str1.split(' ');
  const words2 = str2.split(' ');
  const commonWords = words1.filter(word => words2.includes(word));
  return (commonWords.length / Math.max(words1.length, words2.length));
}

// Function to extract the first part of the address
const extractPlace = (address) => {
  return address.split(',')[0].trim();
};

// Function to check for matching lost items and send notifications
// Function to check for matching lost items and send notifications
async function checkForMatchingLostItemsAndNotify(newPost) {
  try {
    if (newPost.status === 'Found') {
      console.log('Checking for matching lost items...');

      // Extract the first part of the new post's address
      const newPostPlace = extractPlace(newPost.typoaddress);
      console.log(`New post place: ${newPostPlace}`);

      const matchingLostPosts = await Post.findAll({
        where: {
          categoryId: newPost.categoryId,
          status: 'lost',
        },
        include: [{ model: User, as: 'user' }],
      });

      console.log(`Found ${matchingLostPosts.length} matching lost posts.`);

      for (const lostPost of matchingLostPosts) {
        console.log(`Processing lost post ID: ${lostPost.dataValues.id}`);
        
        // Extract the first part of the lost post's address
        const lostPostPlace = extractPlace(lostPost.dataValues.typoaddress);
        console.log(`Lost post place: ${lostPostPlace}`);
console.log(newPostPlace);

        // Check if the places match
        if (newPostPlace === lostPostPlace) {
          const similarity = getSimilarity(newPostPlace, lostPostPlace);
          console.log(`Checking similarity for post ${lostPost.dataValues.id}: ${similarity}`);

          if (similarity > 0.5) {
            const notificationContent = `A matching found item has been posted in the ${newPost.categoryId} category at a similar location. Check it out!`;
            console.log(`Creating notification for user ${lostPost.dataValues.userId}: ${notificationContent}`);
            await createNotification(lostPost.dataValues.userId, notificationContent);
            console.log(`Notification sent to user ${lostPost.dataValues.userId}`);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error checking for matching lost items and sending notifications:', error);
  }
}


// Controller to add a new post
const addPost = async (req, res) => {
  try {
    const { images, description, date, address, status, userId, categoryId, typoaddress } = req.body;

    // Validate the request body
    if (!description || !date || !address || !status || !userId || !categoryId) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new post
    console.log('Creating new post...');
    const newPost = await Post.create({
      images,
      description,
      date,
      address,
      status,
      userId,
      categoryId,
      typoaddress,
    });

    console.log(`New post created with ID ${newPost.id}`);

    // If the post status is 'found', check for matching lost items and notify users
    if (newPost.status === 'Found') {
      console.log('Post status is found. Checking for matching lost items...');
      await checkForMatchingLostItemsAndNotify(newPost);
    }

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to delete a post
const deleteOnePost = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters

    // Validate the ID
    if (!id) {
      return res.status(400).json({ message: 'Post ID is required' });
    }

    // Find and delete the post
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await post.destroy();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get posts by status (e.g., 'Lost' or 'Found')
const getPostsByStatus = async (req, res) => {
  try {
    const { status } = req.params; // Get the status from the request parameters

    // Validate the status
    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    // Query posts based on the status
    const posts = await Post.findAll({
      where: {
        status: status.toLowerCase() // Assuming status is stored in lowercase (adjust as necessary)
      }
    });

    // Check if any posts are found
    if (posts.length === 0) {
      return res.status(404).json({ message: `No posts found with status: ${status}` });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts by status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get posts by category ID
const getPostsByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params; // Get the category ID from the request parameters

    // Validate the category ID
    if (!categoryId) {
      return res.status(400).json({ message: 'Category ID is required' });
    }

    // Query posts based on the category ID
    const posts = await Post.findAll({
      where: {
        categoryId: categoryId // Match the category ID (ensure it's a number)
      }
    });

    // Check if any posts are found
    if (posts.length === 0) {
      return res.status(404).json({ message: `No posts found with category ID: ${categoryId}` });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts by category ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addPost,
  getAllPosts,
  deleteOnePost,
  getPostsByStatus,
  getPostsByCategoryId
};
