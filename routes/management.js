const express = require('express');
const router = express.Router();
const management = require('../controllers/management');
const catchAsync = require('../catchAsync');

router.route('/:id')
      .get(catchAsync(management.getTable))
      
module.exports = router;