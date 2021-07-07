const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
const catchAsync = require('../catchAsync');

router.get('/', catchAsync(home.renderHomePage));




module.exports = router;