const express = require('express');
const router = express.Router();
const moviesDal = require('../src/dal/dal')

router.get('/', async (req, res) => {

    try {
        let theMovies = await moviesDal.getMovies(); 
        if(DEBUG) console.table(theMovies);
        res.render('movies', {theMovies});
    } catch {
        res.render('503');
    }
});
module.exports = router;