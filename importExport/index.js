//*in this file we are importing from the file oper.js
// const name=require('./oper');
// console.log(name);

//if we want more than two functions from diffrent file
// const oper=require('./oper');
// console.log(oper);
//* this will throw error */
// console.log(add(5,5));
// console.log(sub(10,5));
//* this will return the value
// console.log(oper.add(5,5));     //10
// console.log(oper.sub(10,5));    //5

const {add, sub}= require("./oper");
console.log(add(5,5));
console.log(sub(10,5));