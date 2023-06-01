const express = require('express');
const router = express.Router();
const HomeController = require('../controller/HomeController');


router.get('/', HomeController.Home);
router.post('/', HomeController.Home);


module.exports = router;