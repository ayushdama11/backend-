// create a folder name it ayush
//create a file in it named bio.txt and add data into it
// add more data into the file at the end of the existing data.
// read the data without getting the buffer data at first.
// file encoding
// rename the file name to mybio.txt
// now delete both the file and the folder


const fs= require('fs');

// will create folder
// fs.mkdir('ayush',(err)=>{
//     console.log("folder created");
// });

// fs.writeFile('./ayush/bio.txt',"my name is ayush", (err)=>{
//     console.log('files created');
// })

// fs.appendFile('./ayush/bio.txt', 'i am 20 years old', (err)=>{
//     console.log("files data appended");
// })

// fs.readFile('./ayush/bio.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// })

// fs.rename('./ayush/bio.txt', "./ayush/mybio.txt",(err)=>{
//     console.log('rename done');
// } )

// fs.unlink('./ayush/mybio.txt', (err)=>{
//     console.log("file deleted");
// })

//** to remove folder */
fs.rmdir('./ayush', (err)=>{
    console.log("folder deleted");
})