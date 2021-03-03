const express = require('express');
const router = express.Router();
const controller = require('../components/tester/tester.controller');

router.get('/start', controller.start);

module.exports = router;
