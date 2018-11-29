var router = require('koa-router')();
var login = require('./login');
var register = require('./register');
var svgCaptcha = require('svg-captcha');
router.use('/login',login);
router.use('/register',register);
router.get('/getVerCode',ctx=>{
    var captcha = svgCaptcha.create({
        size:4,
        fontSize:40,
        width:100,
        height:40,
        background:"#409EFF"
    })
    ctx.response.type = "image/svg+xml";
    ctx.session.verCode = captcha.text;
    ctx.body = captcha.data;

});
module.exports = router.routes();
