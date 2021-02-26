import { mul } from './test';
import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(mul(2 * 3));

// 添加注释去掉console警告
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4,5,6));

/*
  1. eslint 不认识 window、navigator全局变量
  解决：需要修改package.json中eslintConfig配置
  "eslintConfig": {
    "extends": "airbnb-base",
    "env":{
      "browser":true
    }
  },
  2. sw代码必须运行在服务器上
  2.1 -->nodejs
  2.2 ---> npm i serve -g
    serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
*/
/*
  注册 serviceworker
*/
// 处理兼用性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => {
        console.log('serviceworker 注册成功了');
      })
      .catch(() => {
        console.log('serviceworker注册失败了');
      });
  });
}
