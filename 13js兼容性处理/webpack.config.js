const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname, 'build')
    },
    module:{
        rules:[
           /* 
                js兼容性处理：babel-loader @babel/core @babel/preset-env
                
                1.基本js兼容性处理 ---> @babel/preset-env
                下载：npm i babel-loader  @babel/core @babel/preset-env -D
                问题：只能转换基本语法，如promise不能转换~
                使用：
                    {
                        test:/\.js$/,
                        exclude:/node_modules/,
                        loader:'babel-loader',
                        options:{
                            // 预设：指示babel做怎么样的兼容性处理
                            presets:['@babel/preset-env']
                        }
                    }

                2.全部js兼容性处理 ---> @babel/polyfill
                下载：npm i @babel/polyfill -D
                使用：直接在index.js中引入（import '@babel/polyfill';）
                问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~

                3.需要做兼容性处理的就做：按需加载 ---> core-js
                下载：npm i core-js -D
                使用(注释掉2中的 import '@babel/polyfill';)：
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
           */
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
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),

    ],
    mode:'development'
}