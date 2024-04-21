const fs= require("fs");
const index= fs.readFileSync('index.html', 'utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products= data.products;

const express= require("express");
const server=express();

// ** third party middlewares like cookies
// *morgan is a built in third party middleware logger in express
const morgan=require('morgan');
// server.use(morgan('dev'));  //GET /data.json 200 108.154 ms - 22114
server.use(morgan('default'));

//*** middleware - server.use() likhna hota hai to make a middleware
//this is a type of logger middleware, server pe jo b request jaati hai uska log bana skte haii

//***this is application level middleware 
// server.use((req,res,next)=>{
//     console.log(req.get('User-Agent'),req.method,new Date(), req.ip, req.hostname)   //GET ::1 localhost -- ::1 is shortform of localhost
//     next(); //batata hai ki aap aage ja sakte ho
// })

//GET ::1 localhost -- ::1 is shortform of localhost


// ** built in middlewares - 
//bodyParser - iske bina body kaam nai karegii
server.use(express.json()); //now it can read json which is there in the body in the postman 
// server.use(express.urlencoded()); //used mainly in form where there are many url's

// server.static built in middleware
//iska matlab public naam ke folder me mene ek file banaya hai waha se koi bhi file uthaoo aur host kardo
server.use(express.static('public'));   //so basically this static folder is a type of remote folder which we can access using only /


// middleware name auth
//*** router level middleware
// http://localhost:8080/?password=123 :- here ?password is a req.query 

const auth=(req,res,next)=>{
    // console.log(req.query)   

    // if(req.query.password=='123'){
    // if(req.body.password=='123'){
    //     next()
    // }else{
    //     res.sendStatus(401);
    // }
    next(); //batata hai ki aap aage ja sakte ho
};
// server.use(auth);

// :id means id is variable - localhost:8080/product/5 
server.get('/product/:id',auth,(req,res)=>{
    console.log(req.params);
    res.json({type: 'GET'});
})


//*creating api's - returning json
//CRUD - POST, GET, PUT, DELETE
//API -Endpoint - Route
//get is used to read something

// server.get('/',auth,(req,res)=>{
//     res.json({type: 'GET'})
// })
// post is used to post or we can say give some response
server.post('/',(req,res)=>{
    res.json({type: 'POST'})
})
// put is used to replace something or we can say that it is used to update something
server.put('/', (req,res)=>{
    res.json({type: 'PUT'})
})
//delete
server.delete('/', (req,res)=>{
    res.json({type: 'DELETE'})
})
//patch is used to partially modify something not completely
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


