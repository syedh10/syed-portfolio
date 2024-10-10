require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

// Import Routes
const contactsRoutes = require('./routes/contacts');
const usersRoutes = require('./routes/users');

// Define Routes
app.use('/api/contacts', contactsRoutes);
app.use('/api/users', usersRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
