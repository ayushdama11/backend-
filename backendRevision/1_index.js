// creating a server with http

const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url)    // kis particular url ko ham hit kar rae hai wo batata haii
    // res.end('Hello world');

    if(req.url == "/about") {
        res.end("about page");
    }

    if(req.url == "/profile") {
        res.end("profile page");
    }

    if(req.url == "/") {
        res.end("home page");
    }

})  

server.listen(3000);
 


// npx nodemon app.js
