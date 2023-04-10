const express = require('express');
const mongoose = require('mongoose');
const { port, dbURI } = require('./config/connection');
const apiRoutes = require('./routes/api');

const app = express();

// Set up middleware to parse request bodies as JSON
app.use(express.json());

// Set up API routes
app.use('/api', apiRoutes);

// Connect to MongoDB database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to MongoDB at ${5000}`);
    
    // Start server once connected to database
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
