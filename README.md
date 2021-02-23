# webpack
观看尚硅谷webpack视频教程进行动手实战
> 目前看到第12节已完成

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

## 06打包其它资源
> 打包字体文件
+ webpack.config.js 的module配置
```javascript
module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            // 打包其他资源(除了 html|js|css资源以外的资源)
            {   
                // 排除css|js|html资源，打包其他资源
                exclude:/\.(css|js|html)$/,
                loader: 'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
```

## 07devServer
+ 自动编译，自动打开浏览器等自动化
```javascript
module.exports = {
    /* 
        开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
        特点：只会在内存中编译打包，不会有任何输出
        启动devServer指令为：npx webpack-dev-server
        下载：npm i webpack-dev-server -D
    */
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
```
## 08开发环境配置
+ 将文件进行分类，js放入js文件夹下，样式文件放入css文件夹下，图片文件放入imgs目录下，其它文件放入media文件下。
+ 修改各文件的路径
+ 将编译后的文件也进行分类
> 注意：样式文件编译后不会输出单独的文件，因为它会写进js文件内
    ```javascript
    module: {
        rules:[
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
    ```


## 09提取css成单独文件
> 前面，的css文件是使用css-loader和style-loader 将样式写入js文件的style标签里面。
坏处：js文件体积大，容易闪屏
学习一个新的插件 mini-css-extract-plugin
+ 安装： npm i mini-css-extract-plugin -D
+ 定义（webpack.config.js）：const MiniCssExtractPlugin = require('mini-css-extract-plugin')
+ 将 css文件中的style-loader,改为 MiniCssExtractPlugin.loader
+ 在plugins 追加
    new MiniCssExtractPlugin({
            // 对输出的css文件重命名
            filename: 'css/built.css'
    })
+ 结果：css文件编译后在build/css/built.css下    