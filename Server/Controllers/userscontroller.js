const { User } = require('../Database/index'); // Assuming models are exported from the models folder

// Create a user
const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, gender, phoneNumber, address, role, image,password } = req.body;

    // Create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      gender,
      phoneNumber,
      address,
      role: role || 'user', // Default role is 'user' if not provided
      image,
      password
    });

    // Return the created user data as a response
    return res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({
      message: 'Error creating user',
      error: error.message,
    });
  }
};
const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
  
      res.status(200).json({
        message: 'Users retrieved successfully',
        users,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving users',
        error: error.message,
      });
    }
  };

module.exports = { addUser,getAllUsers };
