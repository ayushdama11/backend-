const express= require("express");
const morgan= require("morgan");
const server=express();
const mongoose= require('mongoose');
// const productController= require('./controller/product'); // for functions

mongoose.connect()

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



server.listen(8080, ()=>{
    console.log("Server started");
});


