// 用来获取机器信息的
var os = require('os')

// 用来获取操作路径的
var path = require('path')

// 获取当前机器的CPU信息
console.log(os.cpus())

// 获取内存memory
console.log(os.totalmem())

// 获取一个路径中的拓展名部分
console.log(path.extname('c:/asdj/sdsa/asd.md'))