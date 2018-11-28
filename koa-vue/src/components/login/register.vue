<template>
    <div class="register-warpper">
        <div class="register-area">
            <el-form label-width="100px">
                <el-form-item  label="用户名">
                    <el-input>123</el-input>
                </el-form-item>
                <el-form-item  label="密码">
                    <el-input type="pasword">123</el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register"
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
