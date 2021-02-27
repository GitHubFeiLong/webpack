
const {resolve} = require('path')
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

/* 
npm i add-asset-html-webpack-plugin -D
*/
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        publicPath:'./',
        filename:'build.js',
        path:resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        // 告诉webpack哪些库不参与打包，同时使用时的名称也得变
        new webpack.DllReferencePlugin({
            manifest:resolve(__dirname, 'dll/manifest.json')
        }),
        // 将某个文件打包输出出去，并在html中自动引入该资源
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, 'dll/jquery.js'),
            
        })
    ],
    mode: 'production'
}