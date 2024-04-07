const fs= require("fs");
const index= fs.readFileSync('index.html', 'utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products= data.products;

const express= require("express");
const server=express();

//*creating api's - returning json
server.get('/', (req,res)=>{
    res.json({type: 'GET'})
})
server.post('/', (req,res)=>{
    res.json({type: 'POST'})
})
server.put('/', (req,res)=>{
    res.json({type: 'PUT'})
})
server.delete('/', (req,res)=>{
    res.json({type: 'DELETE'})
})
server.patch('/', (req,res)=>{
    res.json({type: 'PATCH'})
})


server.get('/demo',(req,res)=>{
    // res.send('<h1>hello</h1>');
    // res.sendFile('D:/Programming/WEB-3/Backend/backend-/yt/index.html');
    // res.json(products)
    // res.sendStatus(200)
})

server.listen(8080, ()=>{
    console.log("Server started");
});


