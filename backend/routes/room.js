const express = require("express");

const router = express.Router();

const roomController = require('../controllers/room')

router.put('/onAccept', roomController.onAccept);
router.put('/onSkip', roomController.onSkip);
router.put('/onOut', roomController.onOut);

module.exports = router;
