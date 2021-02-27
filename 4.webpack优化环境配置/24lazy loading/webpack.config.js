const { resolve } = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/js/index.js',
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
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    mode:'production',
}