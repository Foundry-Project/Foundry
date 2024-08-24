// // models/categoryModel.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../Database'); // Adjust the path to where you export the sequelize instance

// // Define the Category model
// const Category = sequelize.define('Category', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   categoryName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   categoryImage: {
//     type: DataTypes.STRING, // URL or file path to the category image
//     allowNull: true,
//   },
// }, {
//   tableName: 'categories',
//   timestamps: true, // Creates createdAt and updatedAt fields
// });

// module.exports = Category;
