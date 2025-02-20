// npm i express
// express uses http only !!

const express = require('express');
const morgan = require('morgan');   // 3rd party middleware - middleware used as logger
const app = express();

app.use(morgan('dev'));


app.set("view engine", 'ejs')   // for using ejs - set view engine to ejs


// ** middlewares
// mere app.get() hone se pehle wo kisi function se gujarke jani chahie so we use middleware for this purpose

// custom middleware :- 
// app.use((req, res, next) => {
//     console.log("this is middleware");

//     return next();
// })

// ye function koi b route ko hit karne se pehle 1 bar to chalega hi

// 3 types - built in midw, custom midw, 3rd party mdiw


// we can also make custom middleware for any specific route too  !!
app.get('/check',
    (req, res, next)=>{
        const a = 5;
        const b = 10;

        next();

        console.log(a+b);
    }, (req, res)=>{
        res.send("checking custom middleware for specific route only !!")
    }
) 


app.get('/', (req, res) => {
    res.render('1_index.ejs')
})

app.get('/about', (req, res) => {
    res.send('about page');
}) 

app.get('/profile', (req, res) => {
    res.send('profile page');
})



// rendering html using express - EJS
// when using ejs - do => app.set("view engine", 'ejs')
// also you have to make a folder called views - where all the ejs files will be there 


app.listen(3000);