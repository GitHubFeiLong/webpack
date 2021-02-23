/* 
    开发环境的配置：能让代码运行
    项目运行指令：
    webpack ： 会将打包结果输出出去
    npx webpack-dev-server 只会在内存中编译打包，没有输出
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            // loader的配置
            {
                // 处理less资源
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 处理css资源
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 处理图片资源
                test:/\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options:{
                    limit: 8 * 1024,
                    name : '[hash:10].[ext]',
                    // 关闭es6模块化
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {
                // 处理html中img资源
                test:/\.html$/,
                loader: 'html-loader'
            },
            {
                // 处理其他资源
                exclude:/\.(css|js|html|less|jpg|png|gif)$/,
                loader:'file-loader',
                options:{
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins:[
        // plugins的配置
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    // mode:'development',
    devServer:{
         // 项目构建后路径
         contentBase: resolve(__dirname, 'build'),
         // 启动gzip压缩
         compress: true,
         // 端口号
         port:3000,
         // 自动打开浏览器
         open: true, 
    }


}