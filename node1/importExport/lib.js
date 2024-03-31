// from this file we need to export 

//method-1
// exports.sum=(a,b)=>{
//     return a+b;
// }
// exports.sum= sum;
// exports.diff=(a,b)=>{
//     return a-b;
// }


//method-2
const sum=(a,b)=>{
    return a+b;
}
// exports.sum= sum
const diff=(a,b)=>{
    return a-b;
}
export {sum,diff}