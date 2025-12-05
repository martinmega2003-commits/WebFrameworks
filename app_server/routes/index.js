const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

// homepage
router.get('/', ctrlMain.layout);

// login
router.get('/login', ctrlMain.loginGet);
router.post('/login', ctrlMain.loginPost);

// registrace
router.get('/register', (req, res) => res.render('register'));
router.post('/register', ctrlMain.registerPost);

// šablona s daty
router.get('/data_workout', ctrlMain.data_workout);

// JSON API
router.get('/api/locations', ctrlMain.apiLocations);

module.exports = router;
