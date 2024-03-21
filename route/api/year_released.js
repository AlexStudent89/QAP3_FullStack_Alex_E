var router = require('express').Router();
const mDal = require('../../services/m.year_released.dal')
const pgDal = require('../../services/pg.year_released.dal')

// api/year_released
router.get('/m/:year_released', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/year_released/m/ GET ' + req.params.year_released);
    try {
        let theyear_released = await mDal.getyear_released(req.params.year_released); 
        if(theyear_released.length === 0) {
          res.statusCode = 404;
          res.json({message: "Not Found", status: 404});
        } else
        res.json(theyear_released);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.get('/pg/:year_released', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/year_released/pg/ GET ' + req.params.year_released);
  try {
      let theyear_released = await pgDal.getyear_released(req.params.year_released); 
      if(theyear_released.length === 0) {
        res.statusCode = 404;
        res.json({message: "Not Found", status: 404});
      } else
        res.json(theyear_released);
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});

module.exports = router;