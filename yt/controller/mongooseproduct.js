// here we will do crud applications using mongoose and not any external file


const fs= require("fs");
// const index= fs.readFileSync('index.html', 'utf-8');
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products= data.products;

//** importing files from model folder where schema is there */
const model= require('../model/product');
const Product= model.Product;



exports.createProduct = (req,res)=>{
    const product= new Product();
    res.status(201).json(req.body);
}

exports.getAllProducts=  (req,res)=>{
    res.json(products);
}

exports.getProduct= (req, res)=>{
    const id= +req.params.id;      
    const product= products.find(p=>p.id===id);
    res.json(product);
}

//put function
exports.replaceProduct=(req, res)=>{
    const id= +req.params.id;       
    const productIndex= products.findIndex(p=>p.id===id);
    products.splice(productIndex, 1, {...req.body, id:id})
    res.status(201).json();
}

//patch function
exports.updateProduct= (req,res)=>{
    const id = +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product= products[productIndex];  //   iss se jo hamara purana id aur jo cheeze thi wo padi rahe islie hamne ye line likhi hai 
    products.splice(productIndex, 1,{...product,...req.body});
    res.status(201).json();
}

exports.deleteProduct= (req,res)=>{
    const id= +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product= products[productIndex];
    products.splice(productIndex, 1);
    res.status(201).json(product);
}