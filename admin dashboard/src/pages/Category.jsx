import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../components';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/category/all');
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async () => {
    if (!categoryName || !categoryImage) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', categoryImage);
      formData.append('upload_preset', 'amirakr'); // Replace with your Cloudinary upload preset

      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/amyracloudinary/upload',
        formData
      );

      const imageUrl = cloudinaryResponse.data.secure_url;

      const category = {
        categoryName,
        categoryImage: imageUrl,
      };

      await axios.post('http://localhost:3000/category/add', category);
      fetchCategories();
      setCategoryName('');
      setCategoryImage(null);
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleUpdateCategory = async () => {
    if (!editingCategory || !categoryName) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      let imageUrl = editingCategory.categoryImage;

      if (categoryImage) {
        const formData = new FormData();
        formData.append('file', categoryImage);
        formData.append('upload_preset', 'amirakr'); // Replace with your Cloudinary upload preset

        const cloudinaryResponse = await axios.post(
          'https://api.cloudinary.com/v1_1/amyracloudinary/upload',
          formData
        );

        imageUrl = cloudinaryResponse.data.secure_url;
      }

      const updatedCategory = {
        ...editingCategory,
        categoryName,
        categoryImage: imageUrl,
      };

      await axios.put(`http://localhost:3000/category/${editingCategory.id}`, updatedCategory);
      fetchCategories();
      setCategoryName('');
      setCategoryImage(null);
      setEditingCategory(null);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/category/${id}`);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const startEditing = (category) => {
    setEditingCategory(category);
    setCategoryName(category.categoryName);
    setCategoryImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <Header title="Category Management" />
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">{editingCategory ? 'Edit Category' : 'Add Category'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryName">
            Category Name
          </label>
          <input
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryImage">
            Category Image
          </label>
          <input
            id="categoryImage"
            type="file"
            onChange={(e) => setCategoryImage(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          {editingCategory ? (
            <button
              onClick={handleUpdateCategory}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Update Category
            </button>
          ) : (
            <button
              onClick={handleAddCategory}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Add Category
            </button>
          )}
        </div>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Category Name</th>
              <th className="py-2 px-4 border-b">Category Image</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-7 border-b">{category.id}</td>
                <td className="py-2 px-7 border-b">{category.categoryName}</td>
                <td className="py-2 px-7 border-b text-center">
                  <img src={category.categoryImage} alt={category.categoryName} className="w-16 h-16 rounded-lg shadow-md mx-auto" />
                </td>
                <td className="py-2 px-7 border-b">
                  <button
                    onClick={() => startEditing(category)}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;