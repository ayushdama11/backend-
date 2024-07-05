const express= require("express");
const morgan= require("morgan");
const server=express();
const mongoose= require('mongoose');
const {Schema}= mongoose;


// **making router
// const productRouter= express.Router();
const productRouter= require('./routes/mongoseproduct')
const userRouter= require('./routes/user')
const authuserRouter= require('./routes/authuser')

//**mongoose */
main().catch(err => console.log(err));
//here we have used async function because it will return a promise
async function main(){
    //.connect is a mongoose function to connect to a mongodb server
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log("database connected");
}

//see in model folder the use of schema


//middlewares - 
//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));


// to make router as a server
//server.use('/api', productRouter.router);
server.use('/products', productRouter.router);
server.use('/user', userRouter.router);
server.use('/userauth', authuserRouter.router);



server.listen(8080, ()=>{
    console.log("Server started");
});


