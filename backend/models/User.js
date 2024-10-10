// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the 'updated' field before saving
userSchema.pre('save', function(next) {
  this.updated = Date.now();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
