const { resolve } = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
/* 
    PWA:渐进式网络开发应用程序（离线可访问）
    下载:npm i workbox-webpack-plugin -D
    workbox ---> workbox-webpack-plugin

*/
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

// 定义 nodejs环境变量，决定使用browserslist的哪个环节
process.env.NODE_ENV = 'development';

// 复用loader
const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
     // 需要在package.json中定义browserslist
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

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.[contenthash:10].js',
        path:resolve(__dirname, 'build')
    },
    module:{
        rules:[
            {
                // 在package.json中添加eslintConfig配置 ---> airbnb
                test:/\.js$/,
                exclude:/node_modules/,
                // 优先执行
                enforce:'pre',
                loader:'eslint-loader',
                options:{
                    fix: true
                }
            },
            {
                // 以下loader只会匹配一个
                // 注意：不能有两项配置处理同一种类型文件
                oneOf:[
                    {
                        test:/\.css$/,
                        use:[
                            ...commonCssLoader
                        ]
        
                    },
                    {
                        test:/\.less/,
                        use:[
                            ...commonCssLoader,
                            'less-loader'
                        ]
                    },
                    
                    {
                        test:/\.js$/,
                        exclude:/node_modules/,
                        use:[
                            /* 
                                开启多进程打包。
                                进程启动时间大概为600ms，进程通信也有时间开销。
                                只有工作消耗时间比较长，才需要多进程打包
                            */
                            {
                                loader:'thread-loader',
                                options:{
                                    workers:2//进程2个
                                }
                            },
                            {
                                loader:'babel-loader',
                                options:{
                                    presets:[
                                        [
                                            '@babel/preset-env',
                                            {
                                                useBuiltIns:'usage',
                                                corejs:{
                                                    version:3
                                                },
                                                targets:{
                                                    chrome:'60'
                                                }
                                            }
                                        ]
                                    ],
                                    // 开启babel缓存
                                    // 第二次构建时，会读取之前的缓存
                                    cacheDirectory:true
                                }
                            }
                        ],
                        
                    },
                    {
                        test:/\.(jpg|png|gif)/,
                        loader:'url-loader',
                        options:{
                            limit:8*1024,
                            name:'[hash:10].[ext]',
                            outputPath:'imgs',
                            esModule:false
                        }
                    },
                    {
                        test:/\.html$/,
                        loader:'html-loader'
                    },
                    {
                        exclude:/\.(js|css|less|html|jpg|png|gif)/,
                        loader:'file-loader',
                        options:{
                            outputPath:'media'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/built.[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            /* 
                1. 帮助 serviceworker 快速启动
                2. 删除旧的 serviceworker

                生成一个 serviceworker 配置文件
            */
            clientsClaim:true,
            skipWaiting:true
        })
    ],
    mode:'production',
    devtool:'source-map'
}