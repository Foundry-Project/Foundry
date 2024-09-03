const { Match, User, Post } = require('../Database/index'); // Update with your actual path

// Create a new match
const createMatch = async (req, res) => {
  const { userId, postId, handled, date } = req.body;

  try {
    const match = await Match.create({
      userId,
      postId,
      handled: handled || false,  // Default value to false if not provided
      date: date || new Date(),   // Default value to current date if not provided
    });

    res.status(201).json({ success: true, data: match });
  } catch (error) {
    console.error('Error creating match:', error);
    res.status(500).json({ success: false, message: 'Error creating match', error });
  }
};

// Get all matches
const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      include: [
        { model: User, as: 'user', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Post, as: 'post', attributes: ['id', 'description', 'status'] },
      ],
    });

    res.status(200).json({ success: true, data: matches });
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ success: false, message: 'Error fetching matches', error });
  }
};

// Get a match by ID
const getMatchesByUserId = async (req, res) => {
    const { userId } = req.params;
  
    try {
      // Fetch all matches for the specified user
      const matches = await Match.findAll({
        where: { userId },
      
      });
  
      if (!matches.length) {
        return res.status(404).json({ success: false, message: 'No matches found for this user' });
      }
  
      res.status(200).json({ success: true, data: matches });
    } catch (error) {
      console.error('Error fetching matches:', error);
      res.status(500).json({ success: false, message: 'Error fetching matches', error });
    }
  };
  
// Update a match
const updateMatch = async (req, res) => {
  const { id } = req.params;
  const { handled, date,confirmmatch } = req.body;

  try {
    const match = await Match.findByPk(id);

    if (!match) {
      return res.status(404).json({ success: false, message: 'Match not found' });
    }

    match.handled = handled !== undefined ? handled : match.handled;
    match.date = date || match.date;
    match.confirmmatch = confirmmatch !== undefined ? confirmmatch : match.confirmmatch; // Update 'confirmmatch' field if provided

    await match.save();

    res.status(200).json({ success: true, data: match });
  } catch (error) {
    console.error('Error updating match:', error);
    res.status(500).json({ success: false, message: 'Error updating match', error });
  }
};

// Delete a match
const deleteMatch = async (req, res) => {
    const { postId } = req.params; // Use req.params to get postId from URL
    const { userId } = req.body; // Extract userId from request body
  
    if (!postId || !userId) {
      return res.status(400).json({ success: false, message: 'Post ID and User ID are required' });
    }
  
    try {
      const match = await Match.findOne({ where: { postId, userId } });
  
      if (!match) {
        return res.status(404).json({ success: false, message: 'Match not found' });
      }
  
      await match.destroy();
  
      res.status(200).json({ success: true, message: 'Match deleted successfully' });
    } catch (error) {
      console.error('Error deleting match:', error);
      res.status(500).json({ success: false, message: 'Error deleting match', error });
    }
};
const getAllHandledMatches = async (req, res) => {
  try {
    const handledMatches = await Match.findAll({
      where: { handled: false },
     
    });

    res.status(200).json({ success: true, data: handledMatches });
  } catch (error) {
    console.error('Error fetching handled matches:', error);
    res.status(500).json({ success: false, message: 'Error fetching handled matches', error });
  }
};



module.exports = {
  createMatch,
  getAllMatches,
  getMatchesByUserId,
  updateMatch,
  deleteMatch,
  getAllHandledMatches
};
