const express = require('express');
const router = express.Router();
const controller_employee_all = require('./employee-all.controller');

router.route('/')
.get(controller_employee_all.allemployees);

module.exports = router;