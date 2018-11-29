import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:"/",
            name:"Login",
            component: resolve => require(['@/components/login/index'],resolve),
        },
        {
            path:"/register",
            name:"Register",
            component: resolve=>require(['@/components/login/register'],resolve)
        }
    ]
})
