const express= require("express");
const path= require("path");
const bodyParser= require("body-parser");

//body parser is used to extract data from the req.body so that it can be displayed using the res 

const app= express();
const port= 4000;
app.use(bodyParser.urlencoded({extended: false}))

// app.get("/",(req, res)=>{
//     res.send("<h1>Hello world</h1>");
// });

// app.get("/about", (req, res)=>{
//     res.send("<h1>about page</h1>");
// })

// app.get("/contact", (req, res)=>{
//     res.send("<h1>contact page</h1>");
// })

app.get("/", (req, res)=>{
    // path.join() basically adds urls
    console.log(path.join(__dirname+ "/index.html"));
    res.sendFile(path.join(__dirname+ "/index.html"));
})

// *post means writing in data - create
app.post("/api/v1/login", (req,res)=>{
    res.send(`<h1>done Mr. ${req.body.name}</h1> <h2>Your email is ${req.body.email}</h2> <h3>password = ${req.body.password}</h3>`);
    console.log(req.body);
})

app.listen(port, ()=>{
    console.log(`server is working on port: ${port}`);
})


//get post put delete - get=read, post=create, put=update :similar to crud


