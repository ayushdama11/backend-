const fs= require('fs');
// const txt= fs.readFileSync('demo.txt','utf-8');
fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(data);
})
// console.log(txt);

//synchronous takes more time as compare to asynchronous 

