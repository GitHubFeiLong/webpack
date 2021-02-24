const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
    entry:['./src/js/index.js','./src/index.html'],
    output:{
        filename:'js/built.js',
        path: resolve(__dirname, 'build'),
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
                loader: 'file-loader',
                options:{
                    // limit: 8 * 1024,
                    name : '[hash:10].[ext]',
                    // 关闭es6模块化
                    esModule: false,
                    outputPath: 'imgs',
                    publicPath:'./imgs' //打包后，build目录下，index.html中img src该访问的路径
                }
            },
            {
                // 处理html中img资源
                test:/\.html$/,
                loader: 'html-withimg-loader'
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
        }),
    ],
    mode:'development'
    ,
    devServer:{
         // 项目构建后路径
         contentBase: resolve(__dirname, 'build'),
         // 启动gzip压缩
         compress: true,
         // 端口号
         port:3000,
         // 自动打开浏览器
         open: true, 
         // 开启HMR功能（当修改了webpack配置，要重启webpack服务）
         hot: true,
    },
    /* source-map */
    devtool:'eval-source-map'
};
/* 
    source-map:一种提供源代码到构建后代码映射技术（如果构建后代码出错了，通过映射可以追踪源代码错误）

    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

    1.source-map:外部
        错误代码准确信息 和 源代码的错误位置
    2.inline-source-map：内联（只生产一个内联source-map）
        错误代码准确信息 和 源代码的错误位置
    3.hidden-source-map：外部
         错误代码错误原因，但是没有准确错误位置，不能追踪源代码错误，只能提示到构建后代码的错误位置
    4.eval-source-map：内联（每一个文件都生成对应的source—map,都在eval）
        错误代码准确信息 和 源代码的错误位置
    5.nosources-source-map：外部
        错误代码准确信息，但是没有任何源代码信息
    6.cheap-source-map:外部
         错误代码准确信息 和 源代码的错误位置，但是只能精确到行。
    7.cheap-module-source-map:外部
        错误代码准确信息 和 源代码的错误位置，但是只能精确到行。
        module会将loader的source map 加入
    
        内联 和 外部的区别：
        1. 外部生成了文件，内联没有
        2.内联更快

        开发环境：速度快，调试友好。(最优方案：eval-source-map)
            速度快（eval>inline>cheap>...）
                eval-cheap-source-map
                eval-source-map
            调试更友好
                source-map
                cheap-module-source-map
                cheap-source-map

        生产环境：源代码要不要隐藏，调试要不要更友好。（最优：source-map）
            内联会让代码体积更大，所以在生产坏境下，不用内联
            nosources-source-map 全部隐藏
            hidden-source-map  只隐藏源代码，会提示构建后代码错误位置

            
*/