const path = require("path");

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));
if (path.extname(__filename) === ".js") console.log("This is a JS file");
else console.log("unknown file");

// Create path object
console.log(path.parse(__filename));

//Concatenate
console.log(path.join(__dirname, "test", "hello.html"));
