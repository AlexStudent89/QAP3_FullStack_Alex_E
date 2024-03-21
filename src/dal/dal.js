// dal.js

const dal = require("../../services/sql/auth_db");

//get all logins.
var getMovies = function() {
  if(DEBUG) console.log("movies.pg.dal.getMovies()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT movie_id, movie_title, movie_genre, director, year_released, cost FROM public."movies" \
        ORDER BY movie_id DESC LIMIT 7;`
    dal.query(sql, [], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};

module.exports = {
  getMovies
};