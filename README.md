# webpack
观看尚硅谷webpack视频教程进行动手实战
> 目前看到第9节6分钟

<!-- 下载webpack -->
npm i webpack webpack-cli -D
<!-- 运行 -->
webpack

## 01webpack简介
+ less 浏览器不会解析，需要转换成css
+ import $ from 'jquery' 引入jquery资源

## 02webpack初体验
>  1.运行指令：
    1.1. 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
    (webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build/built.js 整体打包环境，是以开发环境)
    1.2. 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
    (webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build/built.js 整体打包环境，是以生产环境)

    2.结论：
    2.1 webpack能处理js和json文件，不能处理 css/img等其它资源
    2.2 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块
    2.3 生产环境比开发环境多一个压缩js代码。

## 03打包样式资源
+ import './index.css'; // 引入样式资源
+ webpack.config.js 配置
```javascript
/* 
    webpack.config.js webpack的配置文件
    作用：指示 webpack干哪些活（当运行webpack指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
*/

// resolve 用来拼接绝对路径的方法
const { resolve } = require('path'); 

module.exports = {
    // webpack配置
    // 入口起点
    entry:"./src/index.js",
    // 输出
    output:{
        // 输出的文件名
        filename:'build.js',
        // 输出路径
        // __dirname nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module:{
        rules:[
            // 详细loader配置(不同文件，必须配置不同loader处理)
            {
                // 匹配哪些文件(正则表达式)
                test: /\.css$/,
                // 使用哪些loader进行处理
                // 要使用多个loader处理用use
                use:[ // use数组中loader执行顺序：从右到左或从下到上 依次执行
                    // 创建style标间，将js中的样式资源插入进去，添加到head中生效
                    'style-loader', 
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css文件
                    // 需要下载 less-loader和less
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins:[
        // 详细plugins的配置
    ],
    // 模式
    mode:'development', // 开发模式
    // mode:'production',
}
```

 ## 04打包html资源   
 > loader: 1.下载 2.使用（配置loader）
    plugins：1.下载(npm i html-webpack-plugin -D) 2.引入 3.使用（new HtmlWebpackPlugin()）
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
```javascript
module.exports = {
    ...
    plugins:[
        // plugins的配置
        // html-webpack-plugin
        // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        // 需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源
            template:'./src/index.html'
        })
    ],
}
```

## 05打包图片资源
```javascript
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname, 'build')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                // 要使用多个loader处理用use
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {   
                // 问题：默认处理不了html中img图片
                test:/\.(jpg|png|gif)/,
                // 使用一个loader
                // 下载url-loader file-loader
                loader: 'url-loader',
                options:{
                    // 图片大小小于8kb，就会被base64处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积会更大（文件请求速度更慢）
                    limit: 8 * 1024,
                    // 问题：因为url-loader默认使用es6模块解析，而html-loader引入图片是commonjs，解析时会出现问题（[object Module]）
                    // 解决:关闭 url-loader的es6模块化，使用commonjs解析
                    // esModule:false,
                    // [hash:10]取图片的hash的前10位；[ext]取文件原来扩展名
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader:'html-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}
```

#