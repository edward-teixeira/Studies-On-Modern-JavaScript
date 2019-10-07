const express = require('express');
const router = express.Router();
//Router is used to define a function for user requests
const path = require('path');
const rootDir = require('../util/path');
//Variable to simulate a database
let products =  [];


// /admin/add-product => GET
router.get('/add-product', (req, res) => {
    //push a product entered by the user into the array
   products.push({title: req.body.title});
   res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
   });
});
//The order of request and resposne does matter
// /admin/add-product => POST 
router.post('/add-product', (req, res) => {
    res.redirect('/');
})
//Args: app.METHOD(PATH, REQUEST & RESPONSE objects in a callback function)
/* app.get('/', (req, res) => {
    
   res.send(`<h1>This is the home page</h1>`) 
}); */

exports.routes = router;
exports.products = products;