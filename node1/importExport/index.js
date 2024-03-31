//* here we are importing

//for method-1
// const lib= require('./lib.js');
// console.log(lib);
// console.log(lib.sum(4,5), lib.diff(3,6));

//for method-2
import {sum, diff} from "./lib.js";
console.log(sum(4,5), diff(3,6));
