<template>
    <div class="main-warpper">
        <el-row>
            <el-col :span="3" class="left-nav">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#181C30"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item index="1">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航1</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航2</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航3</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航4</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航5</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="21" class="main-center">

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>
    .main-warpper{
        min-width: 1300px;
        height: 100vh;
        .el-row{
            height: 100vh;
            .left-nav{
                height: 100vh;
                .el-menu{
                    height: 100vh;
                }
            }
            .main-center{
                padding:30px;
            }
        }
    }
</style>
