const express = require('express');
const router = express.Router();
const { addReaction, removeReaction } = require('../../models/reactions');

// Add a reaction to a thought
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;
    const updatedThought = await addReaction(thoughtId, reactionBody, username);

    return res.json(updatedThought);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;
    const updatedThought = await removeReaction(thoughtId, reactionId);

    return res.json(updatedThought);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
