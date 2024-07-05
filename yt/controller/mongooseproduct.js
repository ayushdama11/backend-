// here we will do crud applications using mongoose and not any external file


const fs= require("fs");
const mongoose= require("mongoose");
const ejs= require("ejs");

// const index= fs.readFileSync('index.html', 'utf-8');
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products= data.products;

//** importing files from model folder where schema is there */
const model= require('../model/product');
const Product= model.Product;
const path= require("path");


//view - controllers for SSR- server side rendering using ejs
exports.getAllProductsSSR= async(req, res)=>{
    const products= await Product.find();
    //renderFile is used to render the ejs file, path.resolve(wo jagah jaha ejs file hai), 
    ejs.renderFile(path.resolve(__dirname,'../pages/index.ejs'), {products:products}, function(err,str){
        res.send(str);
    });
}

exports.getAddForm = async(req, res)=>{
    ejs.renderFile(path.resolve(__dirname,'../pages/form.ejs'), function(err,str){
        res.send(str);
    });
}


//mongoose main functions
exports.createProduct = async(req,res)=>{
    try{
        //making a new instance
        // const product= new Product({
        //     title: 'iphoneX',
        //     price: 999,
        //     rating: 5
        // });

        //from req.body 
        const product= new Product(req.body);

        const saveProduct= await product.save();
        console.log(saveProduct);
        res.status(201).json(saveProduct);
    } catch(err){
        console.error(err);
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.getAllProducts= async(req,res)=>{
    const products= await Product.find()
    // const products= await Product.find({price:{$gt:500}});
    res.json(products);
}

exports.getProduct= async(req, res)=>{
    //here want id in strings only 
    const id= req.params.id;      
    const product = await Product.findById(id);
    res.json(product);
}

//put function
exports.replaceProduct= async(req, res)=>{
    const id = req.params.id;
    try{
        //here we use findOneAndUpdate
        const doc= await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

//patch function
exports.updateProduct= async(req,res)=>{
    const id = req.params.id;
    try{
        //here we use findOneAndUpdate
        const doc= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteProduct= async(req,res)=>{
    const id = req.params.id;
    try{
        //here we use findOneAndUpdate
        const doc= await Product.findOneAndDelete({_id:id})
        res.status(201).json(doc);
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}