console.log("index.js 被加载了");

// import {mul} from './test';

/* 
  魔法注释webpackChunkName、webpackPrefetch、webpackPreload
  webpackChunkName: 会将代码进行分割打包，并命名为"test.js"文件
  webpackPrefetch:true ：来告诉浏览器主线程网络带宽空闲时候，进行加载该模块，当真正运行该模块代码时，浏览器已经加载过一次，此时运行速度就会大大提升
  webpackPreload:true ：来告诉浏览器主线程跟主线程一起加载，这种方式不太推荐。
*/

document.getElementById("btn").onclick = function(){

  // 当 webpack.config.js的 filename 配置了 '[name]'时魔法注释才生效
  /* 
    output:{
        // [name]:取文件名,入口的属性名
        filename:'js/[name].built.[contenthash:10].js',
        path:resolve(__dirname, 'build')
    },
  */

  // 懒加载~：当文件需要使用时，才加载
  // 预加载 prefetch:会在使用之前，提前加载js文件
  import(/* webpackChunkName: "test", webpackPrefetch: true */ './test')
  .then(({mul}) => {
    console.log(mul(2, 3));
  })
  
}