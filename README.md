# webpack
观看尚硅谷webpack视频教程进行动手实战
> 目前看到第22节已完成

## npm下载时使用国内镜像
```bash
npm config set registry https://registry.npm.taobao.org
```

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
                    esModule:false,
                    // [hash:10]取图片的hash的前10位；[ext]取文件原来扩展名
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader:'html-withimg-loader',
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
### html img标签的src图片资源
+ 下载插件： npm install html-withimg-loader -D
+ webpack.config.js 中的rules 添加以下内容
```javascript
{
    // 处理html中img资源
    test:/\.html$/,
    loader: 'html-withimg-loader'
},
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

## 10css兼容性处理
+ 修改package.json 将下面内容放入第一层
```json
"browserslist":{
    // 开发环境（设置node环境变量：process.env.NODE_ENV = 'development'）
    "development":[
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
    ],
    // 生产环境，默认是看生产环境
    "production":[
    ">0.2%",
    "not dead",
    "not op_mini all"
    ]
}
```
+ 修改webpack.config.js
> 1. 下载包：npm i postcss-loader postcss-preset-env -D
> 2. // 修改loader的配置
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
> 3. process.env.NODE_ENV = 'development' // 设置nodejs环境变量，选择使用package.json中的哪个环境

## 11压缩css（将css压缩成一行）
+ 下载 压缩css 需要下载插件：npm i optimize-css-assets-webpack-plugin -D
+ 引入压缩css插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
+ 3.使用压缩css插件
new OptimizeCssAssetsWebpackPlugin()

## 12js语法检查
+ 下载：npm i eslint-loader eslint eslint-config-airbnb-base  eslint-plugin-import -D
+ 配置package.json,将下面内容放入第一层
```json
"eslintConfig":{
    "extends":"airbnb-base"
  }
```
+ 修改webpack.config.js
```javascript
rules:[
    /* 
        语法检查：eslint-loader eslint
        注意：只检查自己写的源代码，第三方库是不用检查
        设置检查规则：
            package.json中eslintConfig中设置~
            "eslintConfig":{
                "extends":"airbnb-base"
            }

            airbnb 需要下载 ---> eslint-config-airbnb-base  eslint-plugin-import eslint
    */
    {
        // 匹配js文件
        test:/\.js$/,
        // 排除node_modules
        exclude:/node_modules/,
        loader:'eslint-loader',
        options:{
            // 自动修复
            fix:true
        }
    }
]
```

## 13js兼容性处理
### 基本js兼容性处理
+ 下载：npm i babel-loader  @babel/core @babel/preset-env -D
+ 使用(webpack.config.js中的module.rules下)：
```javascript
{
    test:/\.js$/,
    exclude:/node_modules/,
    loader:'babel-loader',
    options:{
        // 预设：指示babel做怎么样的兼容性处理
        presets:['@babel/preset-env']
    }
}
```
+  问题：只能转换基本语法，如promise不能转换~
### 全部js兼容性处理
+ 下载：npm i @babel/polyfill -D
+ 使用：直接在index.js中引入（import '@babel/polyfill';）
+ 问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
### 需要做兼容性处理的就做：按需加载
+ 下载：npm i core-js -D
+ 使用(注释掉2中的 import '@babel/polyfill';)：
```javascript
{
    test:/\.js$/,
    exclude:/node_modules/,
    loader:'babel-loader',
    options:{
        // 预设：指示babel做怎么样的兼容性处理
        presets:[
            [
                '@babel/preset-env',
                {
                    // 按需加载
                    useBuiltIns: 'usage',
                    // 指定core-js版本
                    corejs:{
                        version:3
                    },
                    // 指定兼容性做到那个版本浏览器
                    targets:{
                        chrome: '60',
                        firefox:'60',
                        ie:'9',
                        safari: '10',
                        edge:'17'
                    }
                }
            ]
        ]
    }
}
```

## 14js压缩
+ 修改 webpack.config.js的mode值
```javascript
// 生产环境下会自动压缩js代码
mode:'production'
```

## 15html压缩
+ 修改webpack.config.js中 HtmlWebpackPlugin 插件的配置
```javascript
plugins:[
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        // 压缩html代码
        minify:{
            // 移除空格
            collapseWhitespace:true,
            // 移除注释
            removeComments:true
        }
    }),
],
```

## 18HMR
> HMR:hot module replacement 热模块替换/模块热替换
    作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块），极大提升构建速度
    注意：使用webpack5 需要删除package.json中的browserslist相关配置，不然保存时不自动加载。

    样式文件：可以使用HMR功能（因为style-loader内部实现了~）
    js文件：默认不能使用HMR功能 ---> 需要修改js代码，添加支持HMR功能的代码
        注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。

    html文件：默认不能使用HMR功能，同时会导致问题：html文件不能热更新了~（不用做HMR功能）
        解决：修改entry入口，将html文件引入
        entry:['./src/js/index.js', './src/index.html'],

+ 配置HMR(webpack.config.js中devServer的hot设置成true)
```javascript
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
```
+ 样式文件：可以使用HMR功能（因为style-loader内部实现了~）
+ JS文件：在入口文件中添加以下代码
```javascript
if (module.hot) {
    // 一旦 module.hot 为 true，说明开启了HMR功能 ---> 让HMR功能代码生效
    module.hot.accept('./print.js', function(){
        // 方法会监听 print.js文件的变化，一旦发生变化，其它模块不会重新打包构建，会执行后面的回调函数。
        print();
    })
}
```
+ HTML文件：目前未实现

## 19source-map
source-map:一种提供源代码到构建后代码映射技术（如果构建后代码出错了，通过映射可以追踪源代码错误）

+ 格式：[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
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
    
### 内联 和 外部的区别：
1. 外部生成了文件，内联没有
2.内联更快
### 怎样选择
+  开发环境：速度快，调试友好。(最优方案：eval-source-map)
            速度快（eval>inline>cheap>...）
                eval-cheap-source-map
                eval-source-map
            调试更友好
                source-map
                cheap-module-source-map
                cheap-source-map
+ 生产环境：源代码要不要隐藏，调试要不要更友好。（最优：source-map）
            内联会让代码体积更大，所以在生产坏境下，不用内联
            nosources-source-map 全部隐藏
            hidden-source-map  只隐藏源代码，会提示构建后代码错误位置       

## 20.oneOf
+ 作用：优化打包速度
+ 使用之前(webpack.config.js)：
文件需要每个规则都匹配一次，打包慢
```javascript
module:{
        rules:[
            {
                test:/\.css$/,
                ...
            },
            {
                test:/\.less/,
                ...
            },
                {
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
                ...
            },
            {
                test:/\.html$/,
                ...
            },
            {
                exclude:/\.(js|css|less|html|jpg|png|gif)/,
                ...
            }
        ]
    },
```
+ 使用 oneOf 之后
```javascript
module:{
        rules:[
            /* 将同类文件loader提取出来 */
            {
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
                        ...
                    },
                    {
                        test:/\.less/,
                        ...
                    },
                    
                    {
                        test:/\.js$/,
                        ...
                    },
                    {
                        test:/\.(jpg|png|gif)/,
                        ...
                    },
                    {
                        test:/\.html$/,
                        ...
                    },
                    {
                        exclude:/\.(js|css|less|html|jpg|png|gif)/,
                        ...
                    }
                ]
            }
        ]
    },
```

## 啊