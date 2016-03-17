var express = require('express');
var router = express.Router();

var userController = require("../controllers/userController");

/* GET users listing. */
router.post('/api/users/email', userController.findUserByEmail);
//router.post('/api/users/nickname', userController.findByNickname);
//router.post('/api/users/', userController.save);

module.exports = router;
