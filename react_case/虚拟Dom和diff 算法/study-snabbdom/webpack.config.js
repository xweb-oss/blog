
const path = require('path');

module.exports ={
    // 入口
    entry:'./src/index.js',
    output:{ // 出口,
        publicPath:'xuni', //虚拟打包路径,文件不存在，而是在8080端口虚拟生成
        filename:'bundle.js'  // 打包输出的文件名
    },
    devServer:{
        port:8880, //端口
        contentBase:'static' // 静态文件夹
    }
}
