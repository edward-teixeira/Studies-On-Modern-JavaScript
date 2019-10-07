const http = require('http');
//Install express as a dependencie
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
/******************************************** */
//Creates an express application by running express as a function
//..that is exported in the express source file
const app = express();
//Load external router from admin.js
const adminRoutes = require('./routes/admin.js');
//Loead external router from shop.js
const shopRoutes = require('./routes/shop');
//Parser for the body
app.use(bodyParser.urlencoded({extended: false}));
//Set express to use external routes
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//Static pages: Not handled by express but by the file system
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, '/views', '404-page.html'));
})
/******************************************************************** */
//Middleware means that an incoming request is handled by many many functions
//..in express to add some functionality
//Ex: 
//app.use means it will be executed by all requests
/* app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
    //If the next function is not used the request will be pending if no resposne if sent});
    */
/* app.use('/', (req,res,next) => {
    console.log('this always runs');
    next();
    //next function make this request always run
}); */
app.listen(3000);