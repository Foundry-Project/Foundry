const { Category } = require('../Database/index'); // Assuming models are in a separate directory

// Create a new category
const addCategory = async (req, res) => {
  try {
    const { categoryName, categoryImage } = req.body;

    // Create a new category
    const category = await Category.create({ categoryName, categoryImage });

    // Send success response
    return res.status(201).json({ success: true, data: category });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    // Retrieve all categories
    const categories = await Category.findAll();

    // Send success response
    return res.status(200).json({ success: true, data: categories });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single category by ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find category by ID
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    // Send success response
    return res.status(200).json({ success: true, data: category });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update a category by ID
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, categoryImage } = req.body;

    // Find category by ID
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    // Update the category
    await category.update({ categoryName, categoryImage });

    // Send success response
    return res.status(200).json({ success: true, data: category });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a category by ID
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find category by ID
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    // Delete the category
    await category.destroy();

    // Send success response
    return res.status(200).json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
