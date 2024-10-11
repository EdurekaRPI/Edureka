const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// MongoDB Connection String (use your own connection string)
const mongoURI = 'mongodb+srv://anjini:Cluster0@cluster0.n8vvg.mongodb.net/'; // If you're using MongoDB Atlas, replace this with your cluster URI

// Connect to MongoDB
//mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
 //   .then(() => console.log('MongoDB connected successfully'))
 //   .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define a Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

// Define routes
router.get('/', (req, res) => {
  res.send('Welcome to the Express-MongoDB app! I am Anjini');
});

// Create a new user (POST request)
router.post('/users', async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

// Get all users (GET request)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Export router
module.exports = router;
