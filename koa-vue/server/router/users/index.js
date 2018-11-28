var router = require('koa-router')();
var login = require('./login');
var register = require('./register');
router.use('/login',login);
router.use('/register',register);
module.exports = router.routes();
