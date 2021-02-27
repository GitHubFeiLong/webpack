
/* 
    HMR:hot module replacement 热模块替换/模块热替换
    作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块），极大提升构建速度
    注意：使用webpack5 需要删除package.json中的browserslist相关配置，不然保存时不自动加载。

    样式文件：可以使用HMR功能（因为style-loader内部实现了~）
    js文件：默认不能使用HMR功能 ---> 需要修改js代码，添加支持HMR功能的代码
        注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。

    html文件：默认不能使用HMR功能，同时会导致问题：html文件不能热更新了~（不用做HMR功能）
        解决：修改entry入口，将html文件引入
        entry:['./src/js/index.js', './src/index.html'],
    
*/

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
    }


}