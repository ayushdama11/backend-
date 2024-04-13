// **rest api's
// api1 - create - post - data in request body - /students
// api2 - read - get - find data in url params - /students/:id
// api3 - read - get - no data - /students
// api4 - update - put - find data in url params , update data in req body - /students/:id
// api5 - delete - delete - find data in url params - /students/:id

const fs= require("fs");
const index= fs.readFileSync('index.html', 'utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products= data.products;

const express= require("express");
const server=express();

// ** third party middlewares like cookies
// *morgan is a built in third party middleware logger in express
// const morgan=require('morgan');
// server.use(morgan('default'));



// ** built in middlewares - 
//bodyParser - iske bina body kaam nai karegii
server.use(express.json()); //now it can read json which is there in the body in the postman 
// server.use(express.urlencoded()); //used mainly in form where there are url's

// server.static built in middleware
//iska matlab public naam ke folder me mene ek file banaya hai waha se koi bhi file uthaoo aur host kardo
server.use(express.static('public'));   //so basically this static folder is a type of remote folder which we can access using only /




//*creating api's - returning json
//CRUD - POST, GET, PUT, DELETE
//API -Endpoint - Route
server.get('/products', (req, res)=>{
    res.json(products);
});

// ** API -3
// Create api - post - /products            "**C R U D**"
//isme ham normal ek apna khudka product add karege json me 
server.post('/products',(req,res)=>{
    console.log(req.body);  //console.log ho jaega jo hamne product ka info copy kia hai iphone14 wala
    products.push(req.body);    //to add copy wala product to the json data.
    // res.json({type: 'POST'});
    res.status(201).json(req.body);
})

// ** API -1 
// Read- GET /products
server.get('/products', (req,res)=>{
    res.json(products);
});

// ** API -2
// Read-  GET /products/:id
server.get('/products/:id', (req, res)=>{
    const id= +req.params.id;       //  + to make id which is string to a numeric id
    // res.json(products);
    //  This line uses the find method on the products array. It iterates through each product object (p) in the array and checks if the p.id (product's ID) is equal to the extracted id 
    const product= products.find(p=>p.id===id);
    res.json(product);
});


// ** API -4
//Update- PUT /products/:id
server.put('/products/:id', (req, res)=>{
    const id= +req.params.id;       
    //findIndex help karta hai to find the pehla product jiska id = id hoo
    const productIndex= products.findIndex(p=>p.id===id);
    //.splice method is used for updation in an array
    // productIndex = index jaha update karna hai - extracted from url , 1 ka matlab kitne products ko remove karna hai - yaha 1 matlab hame jo product Index pe jo hai sirf usiko remove karna hai, 
    //...req.body ka matlab hame saari properties jo bhi mere req.body me hai use use karna hai 
    // id to bas hame ek extra property add karni hai to ek property hamne daldi jiska naam id rakha and usko id ki value assign kardii
    products.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json();
});


//** diffrence between .put and .patch = */
// so the diffrence between .put and .patch is that .put overwrite kardeta hai cheezo ko jese jitna hamare req.body me tha utna hi aajega wo specific product id pe whereas
// patch jo hota hai wo overwrit nai karta 

// ** Update- PATCH /products/:id
server.patch('/products/:id', (req,res)=>{
    const id = +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product= products[productIndex];  //   iss se jo hamara purana id aur jo cheeze thi wo padi rahe islie hamne ye line likhi hai 
    products.splice(productIndex, 1,{...product,...req.body});
    res.status(201).json();
})



// ** Delete DELETE /products/:id
server.delete("/products/:id" , (req,res)=>{
    const id= +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product= products[productIndex];
    // This line removes one element (the product) from the products array at the specified index (productIndex). This effectively deletes the product from the array.
    products.splice(productIndex, 1);
    res.status(201).json(product);
})


// put is used to replace something or we can say that it is used to update something
// server.put('/', (req,res)=>{
//     res.json({type: 'PUT'})
// })
//delete
// server.delete('/', (req,res)=>{
//     res.json({type: 'DELETE'})
// })
//patch is used to partially modify something not completely
// server.patch('/', (req,res)=>{
//     res.json({type: 'PATCH'})
// })



server.listen(8080, ()=>{
    console.log("Server started");
});


