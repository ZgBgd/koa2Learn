var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var bodyParser = require('koa-bodyparser');
var views = require('koa-views');
var path = require('path');
const render = require('koa-art-template');
var router = new Router();
app.use(bodyParser());
render(app, {
    root: path.join(__dirname, 'views'),
    extname: ".ejs",
    debug: process.env.NODE_ENV !== 'production'
})
router.get('/', async ctx => {
    await ctx.render('index', {
        title: "123",
        list:["a1","a2","a3"]
    })
})
router.post('/login', async ctx => {
    let data = await ctx.request.body;
    ctx.body = data;
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3002)
