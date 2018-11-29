var Koa = require('koa');
var router = require('koa-router')();
var app = new Koa();
var bodyParser = require('koa-bodyparser');
var db = require('./module/db');
var cors =require('koa2-cors');
var users = require('./router/users/index');
var session = require('koa-session');
app.use(bodyParser());



app.keys = ['my project for koa-vue'];

const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) 表示只是服务器端可以获取 */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));
// 配置项
const URL_CONFIG = ['/users/login', '/users/register','/users/getVerCode'];
// 应用中间件
app.use(async (ctx, next) => {
    console.log(ctx.url);
    let url = ctx.url.split('?')[0];
    console.log(false && true);
    if ((!ctx.session.loginstatus) ) {
        if(URL_CONFIG.indexOf(url) > -1){
            await next();
        }else {
            ctx.body = { data: {},msg:"请重新登录"}
        }

    } else { 
        await next();
    }  
})
router.use('/users',users);
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8081);
