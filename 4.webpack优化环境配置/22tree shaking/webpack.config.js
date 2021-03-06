const { resolve } = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

/* 
    tree shaking : 去除无用代码
    前题：1.必须使用es6模块化 2.开启production环境
    作用：减少代码体积

    在package.json中配置： "sideEffects":false
    作用：所有代码都没有副作用（都可以进行tree shaking）
    问题：可能会把css/@bable/polyfill 文件干掉
    "sideEffects":["*.css"]
*/


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
        })
    ],
    mode:'production',
    devtool:'source-map'
}