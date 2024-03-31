//**os module provides operating system related utility methods and properties */
const os= require('os');

//*it returns how much bit your cpu is : 32 bit or 64 bit
// console.log(os.arch());

//*it will show how much free memory is there ::
// const freemem=os.freemem();
// console.log(freemem);   //output will be in bytes
// console.log(`${freemem/1024/1024/1024}`);

//*it shows total memory 
// const totalmem=os.totalmem();
// console.log(`${totalmem/1024/1024/1024}`);

//*host name
// console.log(os.hostname());

//*platform : since i am using windows so for that platform the code is win32
console.log(os.platform());

console.log(os.tmpdir());

console.log(os.type());

