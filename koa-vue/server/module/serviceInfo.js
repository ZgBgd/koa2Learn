const SERVICE_CONFIG = {
    RETURN_MSG:{
        msg:"操作成功",
        data:{},
        statusCode:"0"
    },
    'NOT_NULL':{msg:"用户名或密码为空",statusCode: "1"},
    "NO_USER":{msg:"该用户不存在，请前往注册账户",statusCode:"2"},
    "PASS_ERROR":{msg:"用户名或密码错误",statusCode:"3"},
    "SERVICE_FAILED":{msg:"操作失败",statusCode:"400"},
    "USER_INSYS":{msg:"该账号已经注册了",statusCode:"401"}
}
module.exports = SERVICE_CONFIG;
