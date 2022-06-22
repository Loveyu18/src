import t, { f, f3 } from './func02.js';

console.log(f(7));
console.log(f3(7));
console.log(t); // 沒定義 t 的話會拿到 func02 裡面的 default
