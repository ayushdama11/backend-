const express= require("express");
const path= require("path");
const bodyParser= require("body-parser");
const router=require("./userRoutes");
//body parser is used to extract data from the req.body so that it can be displayed using the res 
// *** "name" of field in index.html jo hota hai wo hame likhna hota hai res.body.name, ....

const app= express();
const port= 4000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());
app.use("/api/v1",router);


// **REST API'S
// app.get("/api/v1/userdata", (req,res)=>{
//     res.json({
//         name: "Ayush",
//         email: "sample@gmail.com",
//         password: "hexed",
//     });
// });

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
})

// app.post("/api/v1/register", (req,res)=>{

//     const userName=req.body.name;
//     const userEmail=req.body.email;
//     const userPswd=req.body.password;

//     res.json({
//         success: true,
//         name: userName,
//         email: userEmail,
//         password: userPswd,
//     });
// })


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
// app.post("/api/v1/login", (req,res)=>{
//     res.send(`<h1>done Mr. ${req.body.name}</h1> <h2>Your email is ${req.body.email}</h2> <h3>password = ${req.body.password}</h3>`);
//     console.log(req.body);
// })

app.listen(port, ()=>{
    console.log(`server is working on port: ${port}`);
})


//get post put delete - get=read, post=create, put=update :similar to crud


// **** rest(representational state transfer) is an api that defines a set of functions that programmers can use to send requests and receive responses using the http protocol methods such as get and post 

