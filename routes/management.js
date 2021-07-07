const express = require('express');
const router = express.Router();
const management = require('../controllers/management');



router.route('/:id')
      .get(management.getTable)
      
module.exports = router;