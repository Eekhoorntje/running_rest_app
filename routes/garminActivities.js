const express = require('express');
const router = express.Router();
const garminActivities = require('../services/garminActivities');

/* GET garminActivities. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await garminActivities.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting garminActivities `, err.message);
    next(err);
  }
});


module.exports = router; 
