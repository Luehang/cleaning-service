const express               = require('express');
const router                = express.Router();

/**
 * GET /
 *
 * Get menu page.
 */
router.get('/', (req, res, next) => {
  res.render('index');
});

/**
 * GET /
 *
 * Get main page.
 */
router.get('/main', (req, res, next) => {
  res.render('main');
});

module.exports = router;
