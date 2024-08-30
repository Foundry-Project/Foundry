const express = require('express');
const router = express.Router();
const catrgotycontrollers = require('../Controllers/categorycontroller');

// Route to add a new post
router.post('/add', catrgotycontrollers.addCategory);

// Route to get all posts
router.get('/all', catrgotycontrollers.getAllCategories);

// Route to get one post
router.get('/:id', catrgotycontrollers.getCategoryById);
 
router.get('/name/:name', catrgotycontrollers.getCategoryByName)

// Route to delete one post
router.delete('/:id', catrgotycontrollers.deleteCategory);

// Route to update one post
router.put('/:id', catrgotycontrollers.updateCategory);




module.exports = router;
