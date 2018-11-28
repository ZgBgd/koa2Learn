var router = require('koa-router')();
router.post('/', async ctx=>{
    ctx.body = "register";
});
module.exports = router.routes();
