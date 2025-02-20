// schema of user for mongodb
const mongoose = require('mongoose');

// user k pas kya kya properties hogi
const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password: String,
    // age : Number,
    // gender : {
    //     type : String,
    //     enum : ['male', 'female']   // when there can be more than 1 values / options 
    // }
})

// actually implemented the schema 
const userModel = mongoose.model('user', userSchema)

module.exports = userModel