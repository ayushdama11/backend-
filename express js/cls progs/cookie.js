// **cookie parser and cookie session both are types of middlewares
// but cookie parser is used to parse cookies attached to the client's req object and makes them availabe in req.cookies
// whereas cookie session is used to store session data


// **cookie-parser
// var express= require("express");
// var cookieParser= require("cookie-parser");
// var app= express();
// app.use(cookieParser());
// app.get("/", function(req, res){
//     **res.cookie() sets cookie named course with value html
//     res.cookie("course", "html");
//     **this sends the message to client
//     res.send("our website has set the cookies");
//     **this logs the cookies which is sent by the client to server
//     console.log("cookies: ",req.cookies);
// });
// app.get('/clear', function(req,res){
//     res.clearCookie("course", "html");
//     res.send("cookie cleared");
// });
// app.listen(4000,()=>{
//     console.log("server is started");
// });

// **cookie-session
var cookieSession = require("cookie-session");
var express = require("express");
var app = express();
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

//this function ensures that the session expires after 5 seconds of inactivity
app.use(function (req, res, next) {
  req.sessionOptions.maxAge = 5000;
  next();
});

app.get("/", function (req, res, next) {
  if (req.session.views) {
    req.session.views++;
    res.send("No. of visits " + req.session.views);
  } else {
    req.session.views = 1;
    res.send("No. of visits " + req.session.views);
  }
});
app.listen(2000);
