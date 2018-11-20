var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();
app.use(async (ctx, next) => { 
    ctx.body = 'get in this';
    await next();
})
//ctx  content 包含了res req 等信息；
router.get('/',async (ctx) => { 
    ctx.body = "返回数据";
}).get('/news',async (ctx) => { 
    ctx.body = "news page"
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001, () => {
    console.log('im in 3001');
});