

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        // 文件名称（指定目录+名称）
        filename:'[name].built.js',
        // 输出文件目录（将来所有资源输出的公共目录）
        path:resolve(__dirname, 'build'),
        // 所有资源引入的公共路径前缀 --> 路径的前面（script的src路径前缀或link标签href前缀）
        publicPath: '/',
        // 非入口chuank的名称
        chunkFilename:'js/[name]_chunk.js',
        // 整个库向外暴露的变量名
        library: '[name]',
        // 变量名添加到哪个上
        // libraryTarget:'window', // 变量名添加到哪个上 browers
        // libraryTarget:'window', // 变量名添加到哪个上 node
        libraryTarget:'commonjs',
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'

}