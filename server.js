const express = require('express');
const { port } = require('./config/connection');
const apiRoutes = require('./routes/api');
const { connectDB } = require('./config/connection');

const app = express();

// Set up middleware to parse request bodies as JSON
app.use(express.json());

// Set up API routes
app.use('/api', apiRoutes);

// Connect to MongoDB database
connectDB()
  .then(() => {
    console.log(`Connected to MongoDB at ${process.env.MONGODB_URI || 'mongodb://localhost/social-network'}`);
    
    // Start server once connected to database
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => console.error(err));

