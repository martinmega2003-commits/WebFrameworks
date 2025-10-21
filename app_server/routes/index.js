var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');


router.get('/', ctrlMain.layout);
router.get('/login', ctrlMain.login);
router.get('/register', ctrlMain.register);
router.get('/data', ctrlMain.data_workout);


module.exports = router;
