// pg.directors.dal.js

const { Pool } = require('pg');

// Create a new PostgreSQL client instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MoviesData',
  password: 'Keyin2021',
  port: 5432,
});

// Function to fetch all directors from the database
async function getAllDirectors() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM directors');
    return result.rows;
  } finally {
    client.release();
  }
}

// Function to add a new director to the database
async function addDirector(director) {
  const client = await pool.connect();
  try {
    const { name, nationality, birth_date } = director;
    const result = await client.query('INSERT INTO directors (name, nationality, birth_date) VALUES ($1, $2, $3) RETURNING *', [name, nationality, birth_date]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Function to update an existing director in the database
async function updateDirector(id, director) {
  const client = await pool.connect();
  try {
    const { name, nationality, birth_date } = director;
    const result = await client.query('UPDATE directors SET name = $1, nationality = $2, birth_date = $3 WHERE id = $4 RETURNING *', [name, nationality, birth_date, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Function to delete a director from the database
async function deleteDirector(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM directors WHERE id = $1', [id]);
    return result.rowCount > 0;
  } finally {
    client.release();
  }
}

module.exports = {
  getAllDirectors,
  addDirector,
  updateDirector,
  deleteDirector,
};