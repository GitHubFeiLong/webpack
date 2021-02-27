const { resolve } = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        filename:'js/built.js',
        path:resolve(__dirname, 'build')
    },
    module:{
        rules:[
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
            /* 
                正常来讲，一个文件只能被一个loader处理。
                当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序。
                先执行 eslint 再执行 babel
            */
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
                    ]
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
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/built.css'
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
    mode:'production'
}