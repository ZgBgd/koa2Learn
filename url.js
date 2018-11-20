var http = require('http');
var url = require('url');
var tools = require('./tool');
http.createServer((req, res) => {
    console.log(req.url);
    // res.send('123')
    tools.say();
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
    res.write('你好 url 模块');
    res.end();
}).listen(3000)