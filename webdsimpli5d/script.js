const mongoose= require('mongoose');
//importing files
const User= require("./user")

//to connect to mongodb
mongoose.connect("mongodb://localhost/testdb")

//calling run function
run();
async function run() {
    try{
        // *** crud
        //creating
        // const user= await User.create({
        //     name: "Kyle",
        //     age:8,
        //     email:"Test@test.com",
        //     hobbies: ["Weight lifting", "bowling"],
        //     address: {
        //         street: "main street",
        //     }
        // });
        // console.log(user);

        //getting or reading
        // const user= await User.findById("662512c443b89ad8f1e504e9");
        // const user= await User.findOne({name: "Kyle"})

        //delete
        // const user= await User.deleteOne({name: 'Kyle'})
        // console.log(user);

        //finding better code
        // const user= await User.where("name").equals("Kyle").where("age").gt("12").limit(2).select("age");
        // user[0].bestFriend= "6625132510e3175dfc72c033"
        // await user[0].save()

        //methods
        const user= await User.findByName("Kyle");
        console.log(user);
        user.sayHi();
    }catch(e){
        console.error(e.message);
    }


    //*** creating a user */
    // const user = new User({name: "Kyle", age:26})
    // await user.save()

    //*** update user */
    // user.name="Sally"
    // await user.save()

    // console.log(user);
}

// const user= new User({name: "Kyle", age:26});

//to save the user in the database using mongoose
//using promise method
// user.save().then(()=>{
//     console.log("user saved");
// })