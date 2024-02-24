const mongoose = require('mongoose');
 
const taskSchema = new mongoose.Schema({
  status: String,
  title: String,
  description: String,
  status: String,
  assignedTo: String
});
 
module.exports = mongoose.model('Task', taskSchema);