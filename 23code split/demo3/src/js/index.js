// import {mul} from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// 添加注释去掉console警告
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4,5,6));

/* 
  通过js代码，让某个文件被单独打包成一个chunk
  import 动态导入语法：能将某个文件单独打包
*/

import (/* webpackChunkName:'test' */'./test')
  .then(({mul, count})=>{
    // 文件加载成功
    // eslint-disable-next-line
    console.log(mul(2,3));
  })
  .catch(()=>{
    // eslint-disable-next-line
    console.log('文件加载失败');
  })


