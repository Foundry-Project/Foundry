const express = require('express');
const router = express.Router();
const postcontrollers = require('../Controllers/postcontroller');

// Route to add a new post
router.post('/add', postcontrollers.addPost);

// Route to get all posts
router.get('/all', postcontrollers.getAllPosts);

router.delete('/del/:id', postcontrollers.deleteOnePost)

router.get('/status/:status', postcontrollers.getPostsByStatus)

router.get('/category/:categoryId', postcontrollers.getPostsByCategoryId);

router.get('/:id',postcontrollers.getPostById)

module.exports = router;
