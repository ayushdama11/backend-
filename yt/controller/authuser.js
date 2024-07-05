// here we will do crud applications using mongoose and not any external file
const fs= require("fs");
const mongoose= require("mongoose");
const ejs= require("ejs");

//** importing files from model folder where schema is there */
const model= require('../model/authuser');
const User= model.User;
const path= require("path");

//mongoose main functions
exports.createUser = async(req,res)=>{
    try{
        const user= new User(req.body);
        const saveuser= await User.save();
        console.log(saveuser);
        res.status(201).json(saveuser);
    } catch(err){
        console.error(err);
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.getAllUsers= async(req,res)=>{
    const users= await User.find()
    // const users= await user.find({price:{$gt:500}});
    res.json(users);
}

exports.getUser= async(req, res)=>{
    //here want id in strings only 
    const id= req.params.id;      
    const user = await User.findById(id);
    res.json(user);
}

//put function
exports.replaceUser= async(req, res)=>{
    const id = req.params.id;
    try{
        //here we use findOneAndUpdate
        const doc= await User.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

//patch function
exports.updateUser= async(req,res)=>{
    const id = req.params.id;
    try{
        //here we use findOneAndUpdate
        const doc= await User.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteUser= async(req,res)=>{
    const id = req.params.id;
    try{
        //here we use findOneAndUpdate
        const doc= await User.findOneAndDelete({_id:id})
        res.status(201).json(doc);
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}