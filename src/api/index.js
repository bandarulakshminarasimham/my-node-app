const express = require('express');
const router = express.Router();

const employee = require('./employee');

router.use('/api/allemployee', employee);

module.exports = router;