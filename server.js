const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/indexRoutes');
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/taskManager', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  // Middleware
app.use(bodyParser.json());
 
app.use(taskRoutes);
app.use(userRoutes);
app.use(indexRoutes);

app.use(express.static('public'));
 

 
// MongoDB connection
mongoose.connect('mongodb://localhost/taskManager', { useNewUrlParser: true, useUnifiedTopology: true });
 
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});