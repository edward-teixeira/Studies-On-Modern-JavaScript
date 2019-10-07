const express = require('express');
const router = express.Router();
//Router is used to define a function for user requests
const path = require('path');
const rootDir = require('../util/path');
// /admin/add-product => GET
router.get('/add-product', (req, res) => {
   res.sendFile(path.join(rootDir, 'views', 'add-product.html')) 
});
//The order of request and resposne does matter
// /admin/add-product => POST 
router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})
//Args: app.METHOD(PATH, REQUEST & RESPONSE objects in a callback function)
/* app.get('/', (req, res) => {
    
   res.send(`<h1>This is the home page</h1>`) 
}); */

module.exports = router;