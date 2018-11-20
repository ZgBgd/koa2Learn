var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var bodyParser = require('koa-bodyparser');
var views = require('koa-views');
const session = require('koa-session');
var router = new Router();
app.use(bodyParser());
app.use(views('views', {
    extension: 'ejs'
}));
app.keys = ['some secret hurr']; //cookie签名
const CONFIG = {
    key: 'koa:sess', // 默认无需配置
    maxAge: 86400000,// 24小时 cookie失效时间
    overwrite: true, //是否可以重写
    httpOnly: true, // true 表示只有服务器端可以获取
    signed: true, //签名
    rolling: false, //每次访问的时候都去更新cookie
    renew: true, //快要到期的时候更新cookie
};
app.use(session(CONFIG, app));
router.get('/', async ctx => {
    ctx.session.username = '123';
    await ctx.render('index');
})
router.post('/login', async ctx => {
    let data = await ctx.request.body;
    console.log(ctx.session.username);
    ctx.body = data;
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3002);