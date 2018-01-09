const express = require('express');
const router = express.Router();

/**
 * POST /api/quote
 *
 * Quote submit API endpoint.
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
