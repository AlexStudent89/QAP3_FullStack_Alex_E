var router = require('express').Router();
const mDal = require('../../services/m.cost.dal')
const pgDal = require('../../services/pg.cost.dal')

// api/cost
router.get('/m/:cost', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/cost/m/ GET ' + req.params.cost);
    try {
        let thecost = await mDal.getcost(req.params.cost); 
        if(thecost.length === 0) {
          res.statusCode = 404;
          res.json({message: "Not Found", status: 404});
        } else
        res.json(thecost);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.get('/pg/:cost', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/full/pg/ GET ' + req.params.cost);
  try {
      let thecost = await pgDal.getFullcost(req.params.cost); 
      if(thecost.length === 0) {
        res.statusCode = 404;
        res.json({message: "Not Found", status: 404});
      } else
        res.json(thecost);
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});

module.exports = router;