<template>
    <div class="register-warpper">
        <div class="register-area">
            <el-form label-width="100px">
                <el-form-item  label="用户名">
                    <el-input v-model="username">123</el-input>
                </el-form-item>
                <el-form-item  label="密码">
                    <el-input v-model="password" type="pasword">123</el-input>
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
                username:"",
                password:"",
            }
        },
        methods:{
            clickCancel(){
                this.$router.push('/login');
            },
            getSubmit(){

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
