// auth_db.js

const { Pool } = require('pg');

// Create a new PostgreSQL client instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MoviesData',
  password: 'Keyin2021',
  port: 5432,
});

// Function to authenticate user credentials
async function authenticateUser(username, password) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    return result.rows.length > 0;
  } finally {
    client.release();
  }
}

module.exports = {
  authenticateUser,
};