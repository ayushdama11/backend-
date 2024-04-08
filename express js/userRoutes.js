
const express= require("express");
const router=express.Router();  //creating instance of router

const registerUser = require("./userController");

router.route("/register").post(registerUser);
router.route("/login").get(registerUser);


module.exports= router;
