var router = require('koa-router')();
var serviceConfig = require('../../module/serviceInfo');
var db = require('../../module/db');
router.post('/', async ctx=>{
    let {username,password,email,phoneNum} = ctx.request.body;
    let userInSys = await db.find('user',{username});
    if(userInSys.length == 0 ){
        let insertData = await db.insert('user',{username,password,email,phoneNum});
        if(insertData){
            ctx.body = serviceConfig.RETURN_MSG;
        }
    }else {
        ctx.body = {...serviceConfig.RETURN_MSG,...serviceConfig.USER_INSYS};
    }

});
module.exports = router.routes();
