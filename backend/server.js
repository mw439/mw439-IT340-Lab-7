// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple route to test
app.get('/', (req, res) => {
  res.send('Welcome to MEAN Stack');
});

// Optional: connect to your local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mean_database')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
