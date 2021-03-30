const express = require("express");

const router = express.Router();

const queueController = require('../controllers/queue')

router.put('/addToQueue', queueController.addToQueue);

module.exports = router;
