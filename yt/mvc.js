const express= require("express");
const morgan= require("morgan");
const server=express();
// const productController= require('./controller/product'); // for functions

// **making router
// const productRouter= express.Router();
const productRouter= require('./routes/product')
const userRouter= require('./routes/user')



//middlewares - 
//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
// to make router as a server
//server.use('/api', productRouter.router);
server.use('/products', productRouter.router);
server.use('/user', userRouter.router);

//http://localhost:8080/api/products  - now this is the path

//****functions
//in product.js - in controller

// MVC - model view controller
// index.html - will be kept in view folder
// data.json or any db info should be kept in model


//with help of router - see in folder routes - all the routes are kept in seperate routes folder


server.listen(8080, ()=>{
    console.log("Server started");
});


