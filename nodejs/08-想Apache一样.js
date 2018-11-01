var http = require('http')
var server = http.createServer()
var fs = require('fs')
var wwwDir = 'D:/nodejs/data'
server.on('request', function (req, res) {
    var filePath = '/index.html'
    var url = req.url
    if (url !== '/') {
        filePath = url
    }
    fs.readFile(wwwDir+filePath,function (err, data) {
        if (err) {
            return res.end('404')
        }
        res.end(data)
    })
    console.log(filePath, wwwDir + filePath)
})
server.listen(3000, function () {
    console.log('running...')
})