const { User } = require('../models');

const userController = {
  // Create a new user
  async createUser(req, res) {
    try {
      const { username, email } = req.body;
      const user = await User.create({ username, email });
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find().sort({ username: 'asc' });
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Get a single user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Update a user by ID
  async updateUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.username = req.body.username;
      user.email = req.body.email;
      await user.save();
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  },

  // Delete a user by ID
  async deleteUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.remove();
      return res.json({ message: 'User deleted' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = userController;
