const { resolve } = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        main:'./src/js/index.js',
        test:'./src/js/test.js'
    },
    output:{
        // [name]:取文件名,入口的属性名
        filename:'js/[name].built.[contenthash:10].js',
        path:resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        })
    ],
    /* 
        1. 可以将 node_modules中代码单独打包一个chunk最终输出
        2. 自动分析，多入口chunk中，有没有公共的文件。如果有会打包成一个单独的chunk
    */
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    mode:'production',
}