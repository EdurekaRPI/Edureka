const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Middleware to parse JSON
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const mongoURI = 'mongodb+srv://anjini:Cluster0@cluster0.n8vvg.mongodb.net/myapp?retryWrites=true&w=majority&appName=Cluster0'; // Update this
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the defined routes
app.use('/', indexRouter);

// Error handling (optional)
app.use(function(req, res, next) {
  res.status(404).send('Sorry, cannot find that!');
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

module.exports = app;
