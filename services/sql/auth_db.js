// auth_db.js

const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'MoviesData',
password: 'Keyin2021',
port: 5432,
});

pool.connect((err) => {
    if (err) {
    console.error('Error connecting to the database', err);
    } else {
    console.log('Connected to the PostgreSQL database MoviesData');
    }
});

module.exports = pool;

