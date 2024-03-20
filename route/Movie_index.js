// Movie_index.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Array of movie objects
const movies = [
  {
    movie_title: 'Female Trouble',
    movie_genre: 'Comedy|Crime',
    director: 'Barbi Sommersett',
    year_released: '12/21/2008',
    cost: '$22.86'
  },
  {
    movie_title: 'Gatekeepers, The',
    movie_genre: 'Documentary',
    director: 'Bari Heard',
    year_released: '1/24/1995',
    cost: '$8.30'
  },
  {
    movie_title: 'L: Change the World',
    movie_genre: 'Crime|Drama|Horror|Thriller',
    director: 'Leda Weymouth',
    year_released: '6/8/2016',
    cost: '$20.35'
  },
  {
    movie_title: 'Bloodtide',
    movie_genre: 'Horror',
    director: 'Cris Scotcher',
    year_released: '11/6/2019',
    cost: '$6.77'
  },
  {
    movie_title: 'Mata Hari',
    movie_genre: 'Drama|Romance',
    director: 'Ibrahim Teasell',
    year_released: '10/16/1979',
    cost: '$29.72'
  },
  {
    movie_title: 'Godzilla vs. Destoroyah',
    movie_genre: 'Japanese kaiju film',
    director: 'Takao Okawara',
    year_released: '1995-09-12',
    cost: '$12.99'
  },
  // Add
];

// Route to fetch data from the movies array
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});