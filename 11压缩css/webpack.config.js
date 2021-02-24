
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 1.下载 压缩css 需要下载插件：npm i optimize-css-assets-webpack-plugin -D
// 2.引入压缩css插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = 'development'



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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                        ident: "postcss"
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        // 3.使用压缩css插件
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode:'development'
}