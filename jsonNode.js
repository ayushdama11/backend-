const fs= require("fs");


// Json= javascript object notation, to transfer data from server to web page we use json.
// it is mostly used for storing and transporting data

const bioData= {
    name : "ayush",
    age : 23,
    cgpa : 7.5,
};

// console.log(bioData.age);


//***to convert object to json - JSON.stringify() */
// const jsondata= JSON.stringify(bioData);
// console.log(jsondata);  //{"name":"ayush","age":23,"cgpa":7.5}
// console.log(jsondata.name); //undefined

//***to convert json to string/object - JSON.parse() */
// const objData= JSON.parse(jsondata);
// console.log(objData);



//sabse pehle convert to json , than dusre file me add kar dena hai , then readfile, again convert back to js obj original and show it on console
const jsonData= JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData, (err)=>{
    console.log("done");
})

fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log(data);
    const orgData= JSON.parse(data);
    console.log(orgData);
})