const express= require("express");
const userauthController= require('../controller/authuser');

const router= express.Router();


router
    .post('/', userauthController.createUser)
    .get('/',userauthController.getAllUsers)
    .get('/:id', userauthController.getUser)
    .put('/:id',userauthController.replaceUser)
    .patch('/:id', userauthController.updateUser)
    .delete("/:id" ,userauthController.deleteUser);
    
exports.router=router;