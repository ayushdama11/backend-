//** zlib module is used for data compression and decompression */

// *deflate function "compresses" the input data using deflate algo
// const zlib1 = require('zlib');
// const input = 'Hello, world!';  //we have to compress this data
// err - error, buffer- compressed data
// zlib1.deflate(input, (err, buffer) => {
//     if (!err) {
//         console.log('Compressed data:', buffer.toString('base64'));
//     }
// });

// *inflate function decompresses data
// const zlib = require('zlib');
// const compressedData = Buffer.from('eJzzSM3JyddRKM8vyklRBAAgXgSK','base64');    //base 64 is binary to text encoding 
// zlib.inflate(compressedData, (err, Buffer) => {
// if (!err) {
// console.log('Decompressed data:', Buffer.toString());
// }
// });


// const zlib = require('zlib');
// * Compressed data in base64 format
// const compressedData = 'eJzzsDPUMAry9dJRK04uyczPAgBmUQc=';
// *Convert the base64 string to a Buffer
// const compressedBuffer = Buffer.from(compressedData, 'base64');
// *Decompress the data
// zlib.inflate(compressedBuffer, (err, buffer) => {
// if (err) {
// console.error('Decompression error:', err);
// } else {
// console.log('Decompressed data:', buffer.toString());
// }
// });


// *gzip is also used for compressing file 
// const zlib= require('zlib');
// const gzip = zlib.createGzip();
// const fs = require('fs');
// const inp = fs.createReadStream('input.txt');
// const out = fs.createWriteStream('New1.txt.gz');
// inp.pipe(gzip).pipe(out)
// console.log('File compressed');


// **so .createGzip() compresses the file and .createGunZip() decompresses the file 
// var fs = require("fs");
// var zlib = require('zlib');
// *Decompress the file
// fs.createReadStream('New1.txt.gz')
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('New.txt'));
// console.log("File Decompressed.");

// const fs = require('fs');
// const http = require('http');
// const readStream = fs.createReadStream('Input2.txt');
// const writeStream = fs.createWriteStream('output.txt');
// readStream.pipe(writeStream);
// http.createServer((req, res) => {
// const fileStream = fs.createReadStream('Input2.txt');
// fileStream.on('open', () => {
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// fileStream.pipe(res);
// });
// fileStream.on('error', (err) => {
// res.writeHead(404, { 'Content-Type': 'text/plain' });
// res.end('File not found');
// });
// }).listen(3000, () => {
// console.log('Server is running on port 3000');
// });

// http.createServer((req, res) => {
// const writeStream = fs.createWriteStream('requestData.txt');
// req.on('data', (chunk) => {
// writeStream.write(chunk);
// });
// req.on('end', () => {
// writeStream.end();
// res.end('Data received and saved');
// });
// }).listen(3001, () => {
// console.log('Server is running on port 3001');
// });


// const zlib = require('zlib');
// const compressedData = Buffer.from('H4sIAAAAAAAAAwXBwQ3CMAwF0H/0P8j/5DIUeQAAAA=', 'base64');
// zlib.gunzip(compressedData, (err, buffer) => {
// if (!err) {
// console.log('Decompressed data:', buffer.toString());
// console.log(buffer)
// }
// });

// const fs = require('fs');
// const http = require('http');
// const readStream = fs.createReadStream('Input2.txt');
// const writeStream = fs.createWriteStream('output.txt');
// readStream.pipe(writeStream);

// *Server for serving Input2.txt
// http.createServer((req, res) => {
// const fileStream = fs.createReadStream('Input2.txt');
// fileStream.on('open', () => {
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// fileStream.pipe(res);
// });
// fileStream.on('error', (err) => {
// res.writeHead(404, { 'Content-Type': 'text/plain' });
// res.end('File not found');
// });
// }).listen(3000, () => {
// console.log('Server for Input2.txt is running on port 3000');
// });

// *Server for receiving data and saving to requestData.txt
// http.createServer((req, res) => {
// const writeStream = fs.createWriteStream('requestData.txt');
// req.on('data', (chunk) => {
// writeStream.write(chunk);
// });
// req.on('end', () => {
// writeStream.end();
// res.end('Data received and saved');
// });
// }).listen(3001, () => {
// console.log('Server for requestData.txt is running on port 3001');
// });


// const zlib = require('zlib');
// const fs = require('fs');

// *Compress a file using Brotli
// function compressFile(inputPath, outputPath) {
// const inputStream = fs.createReadStream(inputPath);
// const brotliStream = zlib.createBrotliCompress();
// const outputStream = fs.createWriteStream(outputPath);
// inputStream.pipe(brotliStream).pipe(outputStream);

// outputStream.on('finish', () => {
// console.log('File compressed successfully.');
// });
// }

// *Decompress a file using Brotli
// function decompressFile(inputPath, outputPath) {
// const inputStream = fs.createReadStream(inputPath);
// const brotliStream = zlib.createBrotliDecompress();
// const outputStream = fs.createWriteStream(outputPath);

// inputStream.pipe(brotliStream).pipe(outputStream);

// outputStream.on('finish', () => {
// console.log('File decompressed successfully.');
// });
// }

// *Example usage
// const inputFile = 'New.txt';
// const compressedFile = 'New.txt.br';
// const decompressedFile = 'New1.txt';

// *Compress the file
// compressFile(inputFile, compressedFile);

// *Decompress the file
// decompressFile(compressedFile, decompressedFile);


// const zlib = require('zlib');
// const fs = require('fs');
// const path = require('path');
// *Function to compress a single file
// function compressFile(filePath, outputPath) {
// const gzip = zlib.createGzip();
// const inp = fs.createReadStream(filePath);
// const out = fs.createWriteStream(outputPath);
// inp.pipe(gzip).pipe(out);
// }
// *Function to compress a folder
// function compressFolder(folderPath, outputFolderPath) {
// *Ensure output folder exists
// if (!fs.existsSync(outputFolderPath)) {
// fs.mkdirSync(outputFolderPath);
// }
// *Read files in the folder
// fs.readdir(folderPath, (err, files) => {
// if (err) {
// console.error('Error reading folder:', err);
// return;
// }

// *ompress each file in the folder
// files.forEach(file => {
// const filePath = path.join(folderPath, file);
// const outputPath = path.join(outputFolderPath, file + '.gz');
// compressFile(filePath, outputPath);
// console.log(`File compressed: ${filePath} -> ${outputPath}`);
// });
// });
// }

// *Example usage
// const folderPath = '/path/to/folder';
// const outputFolderPath = '/path/to/compressed/folder';
// compressFolder(folderPath, outputFolderPath);