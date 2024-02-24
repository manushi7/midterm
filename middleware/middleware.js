const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
 
const app = express();
const port = 3001;
 
// Middleware
app.use(bodyParser.json());
 
// Connect to MongoDB
mongoose.connect('mongodb://localhost/taskManager', { useNewUrlParser: true, useUnifiedTopology: true });
 
// Use routes
app.use('/tasks', taskRoutes);
 
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});