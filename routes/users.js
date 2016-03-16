var express = require('express');
var router = express.Router();

var userController = require();

/* GET users listing. */
router.get('/api/users/:userId', userController.find);

module.exports = router;
