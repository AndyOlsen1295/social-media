const express = require('express');
const router = express.Router();
const { Thought } = require('.');

// Add a reaction to a thought
router.post('/:id/reactions', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);

    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    thought.reactions.push({
      reactionBody: req.body.reactionBody,
      username: req.body.username
    });

    await thought.save();

    return res.json(thought);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Remove a reaction from a thought
router.delete('/:id/reactions/:reactionId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);

    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    const reaction = thought.reactions.id(req.params.reactionId);

    if (!reaction) {
      return res.status(404).json({ error: 'Reaction not found' });
    }

    reaction.remove();

    await thought.save();

    return res.json(thought);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
