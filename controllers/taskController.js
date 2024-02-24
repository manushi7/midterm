const Task = require('../models/task');
 
exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
 
exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
};
 
exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
  res.json(task);
};