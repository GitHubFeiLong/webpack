
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

// npm i mini-css-extract-plugin -D
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    // 创建style 标签，将样式放入
                    // 'style-loader',
                    // 这个loader去掉style-loader，作用：提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,
                    // 将css文件整合到js中
                    'css-loader',
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件重命名
            filename: 'css/built.css'
        })
    ],
    mode:'development'
}