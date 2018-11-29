var router = require('koa-router')();
var db = require('../../module/db');
var tools = require('../../module/tools');
var serviceConfig = require('../../module/serviceInfo');
router.post('/',async ctx=>{
    let logindata = await ctx.request.body;
    if(logindata.verCode && ((logindata.verCode).toLocaleLowerCase() == (ctx.session.verCode).toLocaleLowerCase() )){
        if(logindata.username == "" || logindata.password == ""){
            ctx.body = {...serviceConfig.RETURN_MSG,...serviceConfig.NO_USER};
        }else {
            let userinfoin = await db.find('user',{username:logindata.username});
            if(userinfoin.length == 0 ){
                ctx.body = {...serviceConfig.RETURN_MSG,...serviceConfig.NO_USER};
            }else {
                let returnData = await db.find('user',{username: logindata.username,password:logindata.password});
                if(returnData.length == 0 ){
                    ctx.body = {...serviceConfig.RETURN_MSG,...serviceConfig.PASS_ERROR};
                }else{
                    ctx.body = serviceConfig.RETURN_MSG;
                    ctx.session.loginstatus = tools.md5(`${logindata.username}_${logindata.password}`);
                }
            }
        }
    }else {
        ctx.body = {data:{},msg:"验证码错误"}
    }


})
module.exports = router.routes();

