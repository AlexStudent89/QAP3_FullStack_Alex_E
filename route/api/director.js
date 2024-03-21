var router = require('express').Router();
const usersDal = require('../../services/pg.director.dal')

// api/director
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/director/ GET ' + req.url);
    try {
        let thedirector = await directorDal.getdirector(); 
        res.json(thedirector);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// api/director/:id
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/director/:id GET ' + req.url);
    try {
        let aUser = await directorDal.getdirectorById(req.params.id); 
        if (aUser.length === 0) {
            // log this error to an error log file.
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(aUser);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
  });

module.exports = router;