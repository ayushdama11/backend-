//** path module provides utilities for working with file and directory paths */

//*dirname
const { log } = require('console');
const path= require('path');
// console.log(path.dirname('D:/Programming/WEB-3/Backend/node js/pathNode.js'));

//*extension of current file
// console.log(path.extname('D:/Programming/WEB-3/Backend/node js/pathNode.js'));  //.js

//*base name 
// console.log(path.basename('D:/Programming/WEB-3/Backend/node js/pathNode.js')); //pathNode.js

//*parse() - gives almost all the path and directory details 
const myPath= path.parse('D:/Programming/WEB-3/Backend/node js/pathNode.js');
console.log(myPath.name);
console.log(myPath.root);

