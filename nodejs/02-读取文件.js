// fs是file-system的简写，就是系统文件的意思
// 在Node中如果想要进行文件操作，就必须引入fs这个核心模块
// fs.readFile就是用来读取文件的

// 成功
//     data 数据
//     error null
// 失败
//     data undefined
//     error 错误对象
var fs = require('fs')
fs.readFile('./data/h.txt', function (error, data) {
    // console.log(data.toString())
    // console.log(error)
    // console.log(data)
    if (error) {
        console.log('读取文件失败')
    } else {
        console.log(data.toString())
    }
})
