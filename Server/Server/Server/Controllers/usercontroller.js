const {User} = require('../Database/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const JWT_SECRET = 'azertyuiop123456'

// Register controller
const CreateUser = async (req, res) => {
  
  
    try {
      const { firstName, lastName, email, password, gender, phoneNumber, image, address } = req.body;
      // Check if user already exists
      const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(password);
      // password most contain number , capital and symbol
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      if (!isPasswordValid) {
        return res.status(400).send({ message: 'Password does not meet the criteria' });
    }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        gender,
        phoneNumber,
       
      });
  // , phoneNumber:newUser.phoneNumber
      const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
  
      res.status(201).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  //loging and check 
  const Login = async (req, res) => {
    
  
    try {
      const { email, password } = req.body;
      // Find the user s email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  // phoneNumber:user.phoneNumber , adress:user.address
      // Create JWT token
      const token = jwt.sign({ id: user.id  }, JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

// Admin login function
const AdminLogin = async (req, res) => {
    
  try {
    const { email, password } = req.body;
    // Find the admin by email
    const admin = await User.findOne({ where: { email, role: 'admin' } });
    if (!admin) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (password !== admin.password) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    res.status(200).send({ message: 'Admin login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};
  // delete 
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Find user by ID
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await User.destroy({ where: { id } });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// update user
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, gender, phoneNumber, image, address } = req.body;

    // Find user by ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prepare data for update
    const updatedData = {
      firstName,
      lastName,
      email,
      gender,
      phoneNumber,
      image,
      address,
    };

    // If password is provided, hash it and add to the update data
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    // Update user details
    await User.update(updatedData, { where: { id } });

    // Retrieve the updated user
    const updatedUser = await User.findByPk(id);

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};


//retrieve
const GetallUsers = async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.json(users); 
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Internal Server Error' }); 
  }
};

const GetallAdmins = async (req, res) => {
  try {
    const admins = await User.findAll({ where: { role: 'admin' } }); 
    res.json(admins); 
  } catch (error) {
    console.error('Error retrieving admins:', error);
    res.status(500).json({ message: 'Internal Server Error' }); 
  }
};
const UpdateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, gender, phoneNumber, image, address } = req.body;

    // Find admin by ID and role
    const admin = await User.findOne({ where: { id, role: 'admin' } });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Prepare data for update
    const updatedData = {
      firstName,
      lastName,
      email,
      gender,
      phoneNumber,
      image,
      address,
    };

    // If password is provided, hash it and add to the update data
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    // Update admin details
    await User.update(updatedData, { where: { id, role: 'admin' } });

    // Retrieve the updated admin
    const updatedAdmin = await User.findOne({ where: { id, role: 'admin' } });

    res.status(200).json({ message: 'Admin updated successfully', admin: updatedAdmin });
  } catch (error) {
    console.error('Error updating admin:', error);
    res.status(500).json({ message: 'Error updating admin', error: error.message });
  }
};

const DeleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({
      where: { id, role: 'admin' }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ... existing code ...

//get 1 user
const GetoneUser = async (req, res) => {
  try {
    const { id } = req.params;

    // find 1 user by id
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error retrieving  user:', error);
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
  
  module.exports = {
     CreateUser, 
     Login,
     AdminLogin,
     DeleteUser,
     UpdateUser,
     GetallUsers,
     GetallAdmins,
     UpdateAdmin,
     DeleteAdmin,
     GetoneUser};