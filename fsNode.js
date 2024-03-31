// file handling : fs
const fs= require('fs'); //importing fs module

//***Writing a file */
//synchronous call :- ./ means current directory
// fs.writeFileSync('./test.txt', 'Hello World synchronous');    //this code will create a file named test.txt and write in it "hey there"

//asynchronous call
// fs.writeFile('./test.txt', 'Hello world asynchronous',(err)=>{})


//***Reading a file */ 
//we write utf-8 so that we not get buffer data when we do console.log()
//synchronous call :-
// const result= fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// asynchronous call- here we do not have to store this in any new variable, because the async function do not return anything
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// });


//***Appending a file */
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString()); //this will append date to a file mentioned
// fs.appendFileSync("./test.txt",`${Date.now()} Hii \n`);


//***Copying a file */
// fs.cpSync("./test.txt", "./copy.txt");

//***Deleting a file */
// fs.unlinkSync("./copy.txt");

//***Statistics of any file */
// console.log(fs.statSync('./test.txt'));


//*******Buffer info */
// const buf_data= fs.readFileSync("test.txt");
// console.log(buf_data);
// org_data= buf_data.toString();
// console.log(org_data);

// fs.renameSync("info.txt", "test.txt");




// Synchronous vs Asynchronous
//synchronous:-
const data=fs.readFileSync('test.txt','utf-8');
console.log(data);
console.log("after the data");


//asynchronous:-
fs.readFile('test.txt', 'utf-8', (err,data)=>{
    console.log(data);
});
console.log('after the data');

//so this is the reason why asynchronous is good as compared to synchronous
