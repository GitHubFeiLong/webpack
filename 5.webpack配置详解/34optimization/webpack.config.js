

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm i terser-webpack-plugin -D
const TerserWebpackPlugin = reqiure('terser-webpack-plugin')

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'[name].[contenthash:10].js',
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
    mode:'production',
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
    optimization:{
        splitChunks:{
            chunks:'all',
            // 分割的chunk最小为30kb
            // 以下注释都是默认值
            /* minSize: 30*1024,
            // 最大没有限制
            maxSize:0,
            // 要提取的chunks 最少被引用1次
            minChunks:1,
            // 按需加载时，并行加载的文件的最大数量
            maxAsyncRequests: 5,
            // 入口js文件最大并行请求数量
            maxInitialRequests:3,
            // 名称连接符
            automaticNameDelimiter:'~',
            // 可以使用命名规则
            name:true,
            // 分割chunk的组
            cacheGroups:{
                // node_modules文件会被打包到 vendors 组的chunk中。 ---> vendors~xxx.js
                // 满足上面的公共规则，如大小超过30kb，至少被引用一次
                vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    // 优先级
                    priority:-10
                },
                default:{
                    // 要提取的chunk最少被引用2次
                    minChunks:2,
                    // 优先级
                    priority:-20,
                    // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
                    reuseExistingChunk:true
                }

            } */
        },
        // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
        // 解决：修改a文件导致b文件的contenthash变化
        runtimeChunk:{
            name:entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer:[
            // 配置生产环境的压缩方案：js和css
            new TerserWebpackPlugin({
                // 开启缓存
                cache: true,
                // 开启多进程打包
                parallel:true,
                // 启动source-map
                sourceMap:true,
            })
        ]
           
    }

}