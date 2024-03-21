var router = require('express').Router();
const loginsDal = require('../../services/pg.movie_genre.dal')
//const movie_genreDal = require('../../services/m.movie_genre.dal')

// api/movie_genre
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/movie_genre/ GET ' + req.url);
    try {
        let theLogins = await movie_genreDal.getmovie_genre(); 
        res.json(themovie_genre);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// api/logins/:id
router.get('/:id', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/movie_genre/:id GET ' + req.url);
  try {
      let amovie_genre = await movie_genreDal.getmovie_genreBymovie_genreId(req.params.id); 
      if (aLogin.length === 0) {
          // log this error to an error log file.
          res.statusCode = 404;
          res.json({message: "Not Found", status: 404});
      }
      else
          res.json(aLogin);
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});
router.post('/', async (req, res) => {
  if(DEBUG) { 
      console.log('ROUTE: /api/movie_genre/ POST');
  //    console.log(req);
  }
  try {
      await movie_genreDal.addmovie_genre(req.body.username, req.body.password );
      res.statusCode = 201;
      res.json({message: "Created", status: 201});
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  } 
});
router.patch('/:id', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/movie_genre PATCH ' + req.params.id);
  try {
      await movie_genreDal.patchmovie_genre(req.params.id, req.body.username, req.body.password);
      res.statusCode = 200;
      res.json({message: "OK", status: 200});
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});
router.delete('/:id', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/movie_genre DELETE ' + req.params.id);
  try {
      await movie_genreDal.deletemovie_genre(req.params.id);
      res.statusCode = 200;
      res.json({message: "OK", status: 200});
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});

module.exports = router;