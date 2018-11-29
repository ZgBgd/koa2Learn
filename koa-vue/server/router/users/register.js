var router = require('koa-router')();
router.post('/', async ctx=>{
    // ctx.body = "register";
    let registertData = ctx.request.body;

});
module.exports = router.routes();
