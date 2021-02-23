/* index.js：webpack入口起点文件 */
/* 1.运行指令：
    1.1. 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
    (webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build/built.js 整体打包环境，是以开发环境)
    1.2. 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
    (webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build/built.js 整体打包环境，是以生产环境)

    2.结论：
    2.1 webpack能处理js和json文件，不能处理 css/img等其它资源
    2.2 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块
    2.3 生产环境比开发环境多一个压缩js代码。
*/
// import './index.css';

import data from './data.json';
console.log(data);

function add(x,y){
    return x+y;
}

console.log(add(1,2));