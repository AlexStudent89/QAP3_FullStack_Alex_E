var router = require('express').Router();
// const movie_titleDal = require('../../services/pg.movie_title.dal')
const movie_titleDal = require('../../services/m.movie_title.dal')

// api/movie_title
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/movie_title/ GET ' + req.url);
    try {
        let themovie_title = await movie_titleDal.getmovie_title(); 
        res.json(themovie_title);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// api/movie_title/:id
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/movie_title/:id GET ' + req.url);
    try {
        let anmovie_title = await movie_titleDal.getmovie_titleBymovie_titleId(req.params.id); 
        if (anmovie_title.length === 0) {
            // log this error to an error log file.
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(anmovie_title);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.post('/', async (req, res) => {
    if(DEBUG) { 
        console.log('ROUTE: /api/movie_title/ POST');
        // console.log(req);
    }
    try {
        await movie_titleDal.addmovie_title(req.body.firstName, req.body.lastName );
        res.statusCode = 201;
        res.json({message: "Created", status: 201});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    } 
});
router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/movie_title PUT ' + req.params.id);
    try {
        await amovie_titleDal.putmovie_title(req.params.id, req.body.firstName, req.body.lastName);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/movie_title PATCH ' + req.params.id);
    try {
        await movie_titleDal.patchActor(req.params.id, req.body.firstName, req.body.lastName);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/movie_title DELETE ' + req.params.id);
    try {
        await movie_titleDal.deletemovie_title(req.params.id);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// // list the active api routes
// if(DEBUG) {
//     router.stack.forEach(function(r){
//         if (r.route && r.route.path){
//         console.log(r.route.path)
//         }
//     });
// }
module.exports = router;