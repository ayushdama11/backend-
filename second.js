// module wrapper function

// function(exports, require, module, __filename, __dirname){
    

//we want to access second.js from index.js :- import and export
ayush={
    name: "ayush",
    favNum: 3,
    developer: true
}

console.log(exports, require, module, __filename, __dirname)
// export
module.exports = ayush;    
//when module.exports is written , when import is asked from another file than this object or thing is shown in the output





// }