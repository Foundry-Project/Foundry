

  const { Sequelize, DataTypes } = require('sequelize');
  const bcrypt = require('bcrypt');

  // Create a Sequelize instance
  const sequelize = new Sequelize('lostandfound', 'fourat', 'Liverpool1892', {
    host: 'localhost',
    dialect: 'mysql',
  });

  // Define the User model
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.JSON,
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
    },
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
      type: DataTypes.STRING,
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
      type: DataTypes.JSON,
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
      type: DataTypes.JSON,
      allowNull: false,
    },
    typoaddress: {
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

  // Define the Match model
  const Match = sequelize.define('Match', {
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
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    handled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    confirmmatch: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    paymentId: {
      type: DataTypes.INTEGER,
      references: {
        model: StripePayment, // Name of the table for StripePayment
        key: 'id',
      },
      allowNull: true,
      onDelete: 'SET NULL', // Optionally set to null if the associated payment is deleted
    }
  }, {
    tableName: 'matches',
    timestamps: true,
  });

  // Define the Notification model
  const Notification = sequelize.define('Notification', {
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
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    tableName: 'notifications',
    timestamps: true,
  });

  // Associations
  Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  Post.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
  User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
  Category.hasMany(Post, { foreignKey: 'categoryId', as: 'posts' });
  StripePayment.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  User.hasMany(StripePayment, { foreignKey: 'userId', as: 'payments' });
  Match.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  Match.belongsTo(Post, { foreignKey: 'postId', as: 'post' });
  User.hasMany(Match, { foreignKey: 'userId', as: 'matches' });
  Post.hasMany(Match, { foreignKey: 'postId', as: 'matches' });
  Notification.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  User.hasMany(Notification, { foreignKey: 'userId', as: 'notifications' });

  // Authenticate and synchronize the database
  sequelize.authenticate()
    .then(() => console.log('Database connection successful'))
    .then(() => sequelize.sync({ alter: true }))
    .then(() => {
      console.log('Database and tables created');
      createAdminUsers();
    })
    .catch((err) => console.error('Error setting up database:', err));

  // Function to create admin users by default
  async function createAdminUsers() {
    const adminData = [
      { firstName: 'Fourat', lastName: 'Anderi', email: 'fouratanderi@gmail.com', gender: 'Male', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 }, role: 'admin', password: bcrypt.hashSync('password', 10) },
      { firstName: 'Iheb', lastName: 'Ben Laabidi', email: 'ihbebenlaabidi@gmail.com', gender: 'Male', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 }, role: 'admin', password: bcrypt.hashSync('password', 10) },
      { firstName: 'Amira', lastName: 'Karoui', email: 'amirakaroui@gmail.com', gender: 'Female', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 }, role: 'admin', password: bcrypt.hashSync('password', 10) },
      { firstName: 'Assil', lastName: 'El Abde', email: 'assil@gmail.com', gender: 'Male', phoneNumber: '123456789', address: { lat: 36.8065, lng: 10.1815 }, role: 'admin', password: bcrypt.hashSync('password', 10) },
    ];

    try {
      for (const admin of adminData) {
        const [user, created] = await User.findOrCreate({
          where: { email: admin.email },
          defaults: admin,
        });

        if (created) {
          console.log(`Admin user ${admin.firstName} ${admin.lastName} created successfully.`);
        } else {
          console.log(`Admin user ${admin.firstName} ${admin.lastName} already exists.`);
        }
      }
    } catch (error) {
      console.error('Error creating admin users:', error);
    }
  }
  module.exports = {
    sequelize,
    User,
    Category,
    Post,
    StripePayment,
    Notification,
    Match
  };