// the http.createServer() method includes request and response parameters which is supplied by node js

// the request object can be used to get information about the current http request
//eg: url, request header and data

// the response object can be used to send a response for a current http request

//if the response from the http server is supposed to be displayed as html, you should include an http header with the correct content type

const http= require("http");
const fs= require("fs");
const server= http.createServer((req,res)=>{
    console.log(req.url); // / /favicon.ico /contact /favicon.ico
    ///contact is given by us 
    if(req.url== "/"){
        res.end("hello from the home side");
    } else if(req.url=="/contact"){
        res.end("hello from the contact side");
    } 
    
    // * making our own api 

    else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/apiNode.json`,"utf-8", (err, data)=>{
            console.log(data);
            res.end(data);
        })
    }
    else{
        res.writeHead(404, {"Content-type":"text/html"}); //error404 can be seen in page source - network
        res.end("<h1>404 error page. Page does not exist</h1>");
    }
})


server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port number 8000");
});

