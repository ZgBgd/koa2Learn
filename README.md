# koa2Learn
koa 基本的用法学习
##koa-vue 文件夹是一个 koa+vue+element 等技术实现的一个小的后台， koa 常用的技术 如 koa-router koa-bodyparser koa-session svg-captcha  都有涉及;


#koa2 路径
* 首先了解一下 async 和 await 的使用，和使用场景
* 然后看一下koa_01 文件夹下， koa 和koa-router的使用
* 接着请看一下 ejs 模板语法的使用
### koa内置的中间件分为四种 应用中间件 错误中间件 路由中间件 第三方中间件
* #应用中间件 (可以匹配所有路由的中间件，如果用过vue的同学，可以将这个认为是Vue-router 导航守卫); 所有路由都需要经过的地方
```ruby
  app.use(async (ctx,next)=>{
      //ctx 就是context 上下文 === node 的 req和res
      // next 的作用就跟 vue-router的next的作用一样
      await next();
  })
```
* #路由中间件(用过vue-router 或者react-router-dom 等路由的组件的同学都知道，路由的唯一匹配性，不管写了多少个相同的路由名，只有一个会生效，匹配唯一一个，而通过next() 可以使koa-router 在匹配执行了第一个路由内的方法后，接着去匹配第二个，执行第二个的方法)
```ruby
  router.get('/', async(ctx, next)=>{ 
    console.log(1); 
    next(); 
  }) 
  router.get('/', function (ctx) { 
    ctx.body="Hello koa"; 
  }
```
* #错误中间件 （用法与应用中间件一样，对所有路由的错误进行统一处理）
```ruby
  app.use(async (ctx,next)=>{
      next();
      if(ctx.status == 500){
          console.log('接口报错');
      }else {

      }
  })
``` 
### koa脚手架
- **全局安装** 
```ruby
    npm install koa-generator -g
```
- **创建项目**
```ruby 
    koa koa_demo
```
- **安装依赖**
```ruby
    cd koa_demo
    npm install
```
- **启动项目**
```ruby
    npm start
```

