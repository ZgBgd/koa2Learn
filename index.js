const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    let url = ctx.request.url
    ctx.body = url
})
async function getdata() { 
    return 'abc'
}
async function test() { 
    let info = await getdata();
    console.log(info);
}
test();
app.listen(3000)