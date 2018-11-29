<template>
    <div class="login-warpper">
        <div class="getdata">
            <el-form :model="ruleForm2" status-icon :rules="rulessec" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="on"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verCode">
                    <el-input v-model="ruleForm2.verCode">
                        <template slot="append">
                            <div @click="getQrCode" class="verCodes" v-html="svgData"></div>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                    <el-button @click="resetForm('ruleForm2')">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            var validatePass = (rule, value, callback) => {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            };
            return {
                ruleForm2: {
                    username:"",
                    pass: '',
                    verCode: '',

                },
                svgData:"",
                rulessec: {
                    username:[{
                        required:true,message:"请输入用户名",trigger:"change"
                    }],
                    pass: [
                        {required:true,message:"请输入密码",trigger:"change"}
                    ],
                    verCode:[{
                        required:true,message:"请输入验证码",trigger:"change"
                    }]
                }
            };
        },
        created(){
            this.getQrCode();
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$ajax('/users/login',{username:this.ruleForm2.username,password:this.ruleForm2.pass,verCode:this.ruleForm2.verCode}).then(res=>{
                            console.log(res);
                            if(res.statusCode == "0" ){
                                this.$message.success('登录成功');
                                this.$router.push('/main');
                            }else{
                                this.$message.error(res.msg);
                            }
                        })
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$router.push('/register');
            },
            getQrCode(){
                this.$ajax(`/users/getVerCode?t=${Math.random()}`,"",'GET').then(res=>{
                    this.svgData = res;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .getdata{
        position: absolute;
        left:0px;
        top: 0px;
        right: 0px;
        bottom:0px;
        margin:auto;
        width: 400px;
        height: 300px;
        .verCodes{
            height: 40px;
        }
    }
</style>
