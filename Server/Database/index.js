const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Create a Sequelize instance
const sequelize = new Sequelize('foundry', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the User model
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // URL or file path to the image
    allowNull: true,
  },
  address: {
    type: DataTypes.JSON, // To store latitude and longitude
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'users',
  timestamps: true,
});

// Define the Category model
const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  categoryImage: {
    type: DataTypes.STRING, // URL or file path to the category image
    allowNull: true,
  },
}, {
  tableName: 'categories',
  timestamps: true,
});

// Define the Post model
const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  images: {
    type: DataTypes.JSON, // Array of image URLs
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  address: {
    type: DataTypes.JSON, // To store latitude and longitude
    allowNull: false,
  },
  typoaddress:{
    type: DataTypes.STRING, 
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('lost', 'found'),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
}, {
  tableName: 'posts',
  timestamps: true,
});

// Define the StripePayment model
const StripePayment = sequelize.define('StripePayment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  stripePaymentId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'succeeded', 'failed'),
    allowNull: false,
  },
}, {
  tableName: 'stripe_payments',
  timestamps: true,
});

// Authenticate and synchronize the database
sequelize.authenticate()
  .then(() => console.log('Database connection successful'))
  .then(() => sequelize.sync({ alter: true }))
  .then(() => {
    console.log('Database and tables created');
    // Call the function to create default admin users
    createAdminUsers();
  })
  .catch((err) => console.error('Error setting up database:', err));

// Function to create admin users by default
async function createAdminUsers() {
  const adminData = [
    { firstName: 'Fourat', lastName: 'Anderi', email: 'fouratanderi@gmail.com', gender: 'Male', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 } },
    { firstName: 'Iheb', lastName: 'Ben Laabidi', email: 'ihbebenlaabidi@gmail.com', gender: 'Male', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 } },
    { firstName: 'Amira', lastName: 'Karoui', email: 'amirakaroui@gmail.com', gender: 'Female', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 } },
    { firstName: 'Asil', lastName: 'El Abed', email: 'asilelabed@gmail.com', gender: 'Female', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 } },
  ];

  const password = 'admin';
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  for (let admin of adminData) {
    const existingAdmin = await User.findOne({ where: { email: admin.email } });

    if (!existingAdmin) {
      await User.create({
        ...admin,
        role: 'admin',
        password: hashedPassword,
      });
      console.log(`Admin user created: ${admin.email}`);
    } else {
      console.log(`Admin user already exists: ${admin.email}`);
    }
  }
}

module.exports = {
  sequelize,
  User,
  Category,
  Post,
  StripePayment,
};
