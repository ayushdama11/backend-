// taking user data via form and using it in backend 


const express = require('express');
const morgan = require('morgan');  
const app = express();

// requiring the db connection
const dbConnection = require('./config/db')

// requiring userSchema 
const userModel = require('./models/user') 



app.use(morgan('dev'));

// this are must to write !!    - built in middlW
app.use(express.json())
app.use(express.urlencoded({ extended : true})) 
app.use(express.static("public"))   // for using all the files which are there in the public folder 


app.set("view engine", 'ejs')   // for using ejs - set view engine to ejs


// post method use hoti hai to get data from frontend to backend (server)
// get - server se frontend tk data provide krne k lie


app.get('/', (req, res) => {  
    res.render('2_form')
})

// routes while learning mongodb :--

// this will actually show the register page
app.get('/register', (req, res) => {
    res.render('register')
})
// this will help collect data from the register page

// ** CRUD

// ** CREATE A USER 
app.post('/register', async (req, res) => {
    console.log(req.body);

    // destructuring
    const {username, email, password} = req.body

    // jab tak mera user nai ban jata database me tab tak user registered wala msg send nai hoga 
    await userModel.create({    
        username : username,
        email : email,
        password : password
    })

    res.send('user registered')
})

// ** READ IN DATABASE 
app.get("/get-users", (req, res)=>{
    // ** will display all the users in the database 
    // userModel.find().then((users)=>{
    //     res.send(users)
    // })

    // ** will display specific user with user name 'b'
    // userModel.find({
    //     username : 'b'
    // }).then((users) => {
    //     res.send(users)
    // })

    // if there are no user with the specific condition then it will return an empty array 

    // ** findOne
    userModel.findOne({
        username : 'b'
    }).then((user)=>{
        res.send(user)
    })
    // agar multiple users hai meeting specific conditions than jo b pehle create hua reta hai use return kar deta haii 
})

// ** UPDATE USER 
app.get('/update-user', async(req, res) => {
    // first we have to find that user than we have to update it 
    await userModel.findOneAndUpdate({    // first find that user 
        username : 'a'
    }, {    // than secondly update 
        email : "c@c.com"
    })

    res.send("user updated")
})

// ** DELETE USER
app.get('/delete-user', async(req, res) => {
    await userModel.findOneAndDelete({
        username : 'a'
    })

    res.send("user deleted")
}) 


app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('data received')
})



app.listen(3000); 

