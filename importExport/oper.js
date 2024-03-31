const add= (a,b)=>{
    return a+b;
};

const sub=(a,b)=>{
    return a-b;
};

// module.exports.add= add;
// module.exports.sub= sub;

// const name= "ayush";
// module.exports= name;    //we have made add function public 

module.exports= {add,sub};