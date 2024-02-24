const express = require('express');
const router = express.Router();
const Task = require('../models/task');
 
// Get all tasks
router.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
router.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/tasks/:id', async (req, res) => {
  try {
    const tasks = await Task.findById({ id: req.params.id });
    if (!tasks) return res.status(404).json({ message: 'task not found' });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 
 
// Add more routes for creating, updating tasks, etc.
 
module.exports = router;

