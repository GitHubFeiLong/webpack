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
