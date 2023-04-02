const express = require('express');
const connectDB = require('./config/connection');

const app = express();

// Connect to MongoDB database
connectDB();

// ...
