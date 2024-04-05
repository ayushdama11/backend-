//streams are objects that let you read data from a source or write data to a destination in continous fashion.
//example - streaming music movies, etc

//types of streams :- readable, writable , duplex, transform
//readable - stream which is used for read operation
//writable - stream which is used for write operation
// duplex - stream which can be used for both read and write operation
// transform - stream where output is computed based on input

//each type of stream is an eventEmitter instance and throws several events at diffrent instance of times.
// commonly used events -
// data - this event is fired when there is some sort of data that is needed to be read
// end - this event is fired when there is no more data to be readed
// error - this event is fired when there is any error
// finish - fired when all data is finished 

//** this is not streaming */
// const fs= require("fs");
// const http= require("http");
// const server= http.createServer();
// server.on('request', (req, res)=>{
//     fs.readFile('input.txt', (err, data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });
// });
// server.listen(8000, "127.0.0.1");


//** solution with streaming */
//Readable stream -
// create a readable stream
// handle stream events -> data, end and error

// const fs= require("fs");
// const http= require("http");
// const server= http.createServer();
// server.on('request', (req, res)=>{
//     const rstream= fs.createReadStream("input.txt");
//     rstream.on('data', (chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on('end', ()=>{
//         res.end();
//     })

//     rstream.on('error', (err)=>{
//         console.log(err);
//         res.end("file not found");
//     });
// });
// server.listen(8000, "127.0.0.1");

const fs = require('fs');
const writeStream = fs.createWriteStream('output1.txt');
writeStream.write('Hello, ');
writeStream.write('world!');
writeStream.end();
writeStream.on('finish', () => {
    console.log('Data has been written to the file.');
});
writeStream.on('error', (err) => {
    console.error('Error writing to file:', err);
});