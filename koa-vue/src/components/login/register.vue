<template>
    <div class="register-warpper">
        <div class="register-area">
            <el-form :model="formInfo" :rules="rules" label-width="100px" ref="register" >
                <el-form-item  label="用户名" prop="username">
                    <el-input v-model="formInfo.username">123</el-input>
                </el-form-item>
                <el-form-item  label="密码" prop="password">
                    <el-input type="password" v-model="formInfo.password">123</el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="email" v-model="formInfo.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phoneNum">
                    <el-input type="tel" v-model="formInfo.phoneNum"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getSubmit">提交</el-button>
                    <el-button @click="clickCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return {
               formInfo:{
                   username:"",
                   password:"",
                   email:"",
                   phoneNum:""
               },
               rules:{
                   username:[{required:true,message:"请输入用户名",trigger:"change"}],
                   password:[{required:true,message:"请输入密码",trigger:"change"}],
                   email:[{required:true,message:"请输入邮箱号码",trigger:"change"}],
                   phoneNum:[{required:true,message:"请输入手机号码",trigger:"change"}]
               }
            }
        },
        methods:{
            clickCancel(){
                this.$router.push('/login');
            },
            getSubmit(){
                this.$refs.register.validate((valid)=>{
                    if(valid){
                        this.$ajax('/users/register',this.formInfo).then(res=>{
                            if(res.statusCode == "0" ){
                                this.$message.success('注册成功');
                                this.$router.push('/');
                            }else {
                                this.$message.error(res.msg);
                            }
                        })
                    }else {

                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .register-warpper{
        .register-area{
            width: 400px;
            margin:0px auto;
            padding:100px;
        }
    }
</style>
