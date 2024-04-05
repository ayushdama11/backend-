//stream.pipe() - method which takes a readable stream and connect it to a writeable stream

const fs= require("fs");
const http= require("http");
const server= http.createServer();
server.on('request', (req, res)=>{
    const rstream= fs.createReadStream("input.txt");
    rstream.pipe(res);
});
server.listen(8000, "127.0.0.1");
