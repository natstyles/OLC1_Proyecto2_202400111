const express = require('express');
const router = express.Router();
const analyzerController = require('../controllers/analyzerController');

router.post('/execute', analyzerController.execute);

module.exports = router;