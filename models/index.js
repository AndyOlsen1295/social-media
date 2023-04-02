const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API endpoints
app.use('/api/users', require('./routes/users'));
app.use('/api/thoughts', require('./routes/thoughts'));
app.use('/api/friends', require('./routes/friends'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
