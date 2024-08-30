const { Post} = require('../Database/index'); // Adjust the path based on your project structure

// Controller to add a new post
const addPost = async (req, res) => {
  try {
    const { images, description, date, address, status, userId, categoryId,typoaddress } = req.body;

    // Validate the request body
    if (!description || !date || !address || !status || !userId || !categoryId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new post
    const newPost = await Post.create({
      images,
      description,
      date,
      address,
      status,
      userId,
      categoryId,
      typoaddress
    });

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

module.exports = {
  addPost,
  getAllPosts,
  deleteOnePost,
  getPostsByStatus
};
