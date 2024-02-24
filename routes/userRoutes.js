const express = require('express');
const router = express.Router();
const User = require('../models/user');
 
// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
 
// Create a new user
router.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
 
// Get user by username
router.get('/users/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 
module.exports = router;

