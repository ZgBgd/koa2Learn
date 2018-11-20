var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var bodyParser = require('koa-bodyparser');
var views = require('koa-views');
var router = new Router();
app.use(bodyParser());
app.use(views('views', {
    extension:'ejs'
}))
router.get('/', async ctx => {
   await ctx.render('index')    
})
router.post('/login', async ctx => { 
    let data = await ctx.request.body;
    ctx.body = data;
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3002)
