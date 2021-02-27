

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* 
    entry:入口起点
    1. string（单入口）：打包形成一个chunk，输出一个bundle文件。此时，chunk的名称默认是‘main’
    2. array（多入口）: 所有入口文件最终只会形成一个chunk，输出出去只有一个bundle文件，只有在HMR功能中让html热更新失效
    3. object(多入口)：有几个入口文件就形成几个chunk，输出几个bundle文件，此时chunk的名称是key。
        特殊用法，此时index.js和count.js打包成一个文件，add.js打包成另一个文件
        entry:{
            index:['./src/index.js', './src/count.js'],
            add : './src/add.js'
        },

*/
module.exports = {
    entry:{
        index:['./src/index.js', './src/count.js'],
        add : './src/add.js'
    },
    output:{
        filename:'[name].built.js',
        path:resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'

}