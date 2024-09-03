const express = require('express');
const matchController = require('../Controllers/matchcontroller'); // Replace with the correct path to your matchController file

const router = express.Router();

// Route to create a new match
router.post('/matches', matchController.createMatch);

// Route to get all matches
router.get('/matches', matchController.getAllMatches);

// Route to get a match by ID
router.get('/matches/user/:userId', matchController.getMatchesByUserId);

// Route to update a match
router.put('/matches/:id', matchController.updateMatch);

// Route to delete a match
router.delete('/matches/:postId', matchController.deleteMatch);

router.get('/handled',matchController.getAllHandledMatches)

module.exports = router;
