const { Thought } = require('../models');

const thoughtController = {
  // Create a new thought
  async createThought(req, res) {
    try {
      const { username, thoughtText } = req.body;
      const thought = await Thought.create({ username, thoughtText });
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find().sort({ createdAt: 'desc' });
      return res.json(thoughts);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Get a single thought by ID
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Update a thought by ID
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      thought.thoughtText = req.body.thoughtText;
      await thought.save();
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Delete a thought by ID
  async deleteThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      await thought.remove();
      return res.json({ message: 'Thought deleted' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = thoughtController;
