var Koa = require('koa');
var router = require('koa-router')();
var app = new Koa();
var bodyParser = require('koa-bodyparser');
var db = require('./module/db');
var cors =require('koa2-cors');
var users = require('./router/users/index');
app.use(bodyParser());
app.use(async (ctx,next)=>{
    await next();
})
router.use('/users',users);
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8081);
