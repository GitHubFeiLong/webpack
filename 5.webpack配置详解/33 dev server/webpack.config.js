

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'[name].built.js',
        path:resolve(__dirname, 'build'),
    },
    module:{
        rules:[
            // loader的配置
            {
                test:/\.css$/,
                // 多个loader用use
                use:['style-loader', 'css-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development',
    // 解析模块的规则
    resolve:{
        // 配置解析模块路径别名：优点简写路径，缺点路径没有提示
        alias:{
            $css:resolve(__dirname, 'src/css')
        },
        // 配置省略文件路径的后缀名
        extensions:['.js', '.json', '.jsx','.css'],
        // 告诉 webpack 解析模块的时候去找哪个目录
        modules:[resolve(__dirname, '../../node_modules/'),'node_modules']
    },
    devServer:{
        // 运行代码的目录
        contentBase: resolve(__dirname, 'build'),
        // 监视contentBase 目录下的所有文件，一旦文件变化就会 reload
        watchContentBase:true,
        watchOptions:{
            // 忽略文件
            ignored:/node_modules/
        },
        // 启动gzip压缩
        compress:true,
        // 端口号
        port: 5000,
        // 域名
        host: 'localhost',
        // 自动打开默认浏览器
        open: true,
        // 开启HMR功能
        hot: true,
        // 不需要显示启动服务器日志信息
        clientLogLevel: 'none',
        // 除了一些基本启动信息以外，其他内容都不要显示
        quiet: true,
        // 如果出错了，不要全屏提示
        overlay:false,
        // 服务器代理 ---> 解决开发环境跨域问题
        proxy:{
            // 一旦 devServer（5000） 接收到 /api/xxx 的请求，就会把请求转发到另外一个服务器(target)
            '/api':{
                target:'http://localhost:3000',
                // 发送请求时，请求路径重写，将 /api/xxx ---> /xxx （去掉/api）
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }

}