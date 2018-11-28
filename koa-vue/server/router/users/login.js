var router = require('koa-router')();
var db = require('../../module/db');
router.post('/',async ctx=>{
    let logindata = await ctx.request.body;
    if(logindata.username == "" || logindata.password == ""){
        ctx.body = {data:{},msg:"用户名或密码为空",status:ctx.status}
    }else {
        let userinfoin = await db.find('user',{username:logindata.username});
        if(userinfoin.length == 0 ){
            ctx.body = {data:{},msg:"该用户不存在，请前往注册账户",status:ctx.status}
        }else {
            let returnData = await db.find('user',logindata);
            console.log(returnData);
            if(returnData.length == 0 ){
                ctx.body = {data:{},msg:"用户名或密码错误",status:ctx.status}
            }else{
                ctx.body = {data:{result :0},msg:"登录成功"}
            }
        }
    }
})
module.exports = router.routes();

