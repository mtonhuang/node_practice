var fs = require('fs')

// 第一个参数：文件路径
// 第一个参数：文件内容
// 第一个参数：回调函数
fs.writeFile('./data/README.md','大家好1111，啊哈哈哈',function (error) {
    // console.log('文件写入成功')
    // console.log(error)
    if (error) {
        console.log('写入失败')
    } else {
        console.log('写入成功')
    }
})