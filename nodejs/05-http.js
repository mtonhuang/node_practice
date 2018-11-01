// 用node构建一个web服务器
// Node中提供了一个专门的模块：http
// http这个模块的职责就是帮你创建编写服务器

// 1，加载http核心模块
var http = require('http')

// 2.使用http.createServer()方法创建一个Web服务器
//返回一个Server实例
var server = http.createServer()

// 3.服务器要干嘛？
// 注册request请求事件
// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理
server.on('request',function (request,response) {
    console.log('收到客户端的请求了,请求的路径是：' + request.url)
    // if (request.url === '/index') {
    //     response.end('nodejs')
    // }
    // else if (request.url === '/login') {
    //     response.end('登录')
    // }
    // else {
    //     response.end('404')
    // }

    if (request.url ==='/products') {
        var products = [
            {
                name: '苹果 X',
                price: 9999
            },
            {
                name: 'xiang X',
                price: 99
            },
            {
                name: 'xiao X',
                price: 99123
            }
        ]
        response.end(JSON.stringify(products))
    }
})

// 4.绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('服务器启动成功了，可以访问http://10.75.105.28:3000')
})