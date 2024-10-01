const mongoose = require('mongoose');

// Define a User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});

// Create a User model
const User = mongoose.model('User', userSchema);

module.exports = User;
