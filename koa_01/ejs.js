var Koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var app = new Koa();
//配置第三方中间件
app.use(views('views', {
   extension:"ejs"
}));
/**
 * app.use('view',{map:{html:"ejs"}}) //这种配置下， 文件后缀名必须为html
 * app.use('view',{extension:"ejs"}) //这种配置下。文件名为ejs
 */
router.get('/', async (ctx) => { 
    let title = "你好 ejs";
    await ctx.render('index', {
        title:title
    });
})
router.get('/news', async (ctx) => { 
    let list = ['111', 'aaa', '222', 'bbb'];
    await ctx.render('for', {
        list:list
    })
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001);