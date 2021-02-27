

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
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
                use:['style-loacer', 'css-loader']
            },
            {
                test:'\.js$',
                // 排除 node_modules 下的js文件
                exclude:/node_modules/,
                // 只检查 src 下的js文件
                include: resolve(__dirname, 'src'),
                // 优先执行('pre'),延后执行（'post'）
                enforce: 'pre',
                // 单个loader
                loader:'eslint-loader',
                // 其它配置
                options:{}
            },{
                // 以下配置只会生效一个
                oneOf:[]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'

}