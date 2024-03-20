// app.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the path for views directory
app.set('views', path.join(__dirname, 'views'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Dummy users data for demonstration
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Render the movies.ejs file
app.get('/', (req, res) => {
  res.render('movies', { movies: [] });
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Authentication logic - Check if username and password match any user
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // If authentication successful, redirect to the homepage
    res.redirect('/');
  } else {
    // If authentication fails, render the login page with an error message
    res.render('movies', { movies: [], errorMessage: 'Invalid username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});