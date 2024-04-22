const mongoose= require("mongoose");

const addressSchema= new mongoose.Schema({
    street: String,
    city: String
})

const userSchema= new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,

        //** custom validator */
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`,
        },
    },
    email: {
        type: String,
        minLength: 10,
        //also we can use maxLength
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        // default: new Date(),
        // default is used to set the default value, and prints it whenever needed
        default: ()=>Date.now(),
    },
    updatedAt: {
        type: Date,
        // immutable things cannot be changed 
        immutable: true,
        default: ()=>Date.now(),
    },
    //this bestfriend is refrence to another object based on __id
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    //hobbies is array of string
    hobbies: [String],
    // address: {
    //     street: String,
    //     city: String
    // },
    address: addressSchema,
})

//we cannot use arrow function in mongoose
userSchema.methods.sayHi= function(){
    console.log(`Hi. My name is ${this.name}`)
}

userSchema.statics.findByName= function(name){
    return this.where({name: new RegExp(name,'i')})
}

module.exports= mongoose.model("User", userSchema)

