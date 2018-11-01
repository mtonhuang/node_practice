// require
// 端口号

var http = require('http')

var server = http.createServer()

server.on('request',function (request, response) {
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end('hello')
})
server.listen(3000,function () {
    console.log('Server is running')
})