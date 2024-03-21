// dal.js

const { Pool } = require('pg');

// Create a new Pool instance to manage database connections
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MoviesData',
  password: 'Keyin2021',
  port: 5432,
});

// Function to retrieve all movies from the database
async function getAllMovies() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM movies');
    client.release(); // Release the client back to the pool
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// Function to insert a new movie into the database
async function insertMovie(movie) {
  const { movie_title, movie_genre, director, year_released, cost } = movie;
  try {
    const client = await pool.connect();
    await client.query(
      'INSERT INTO movies (movie_title, movie_genre, director, year_released, cost) VALUES ($1, $2, $3, $4, $5)',
      [movie_title, movie_genre, director, year_released, cost]
    );
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

module.exports = {
  getAllMovies,
  insertMovie,
};