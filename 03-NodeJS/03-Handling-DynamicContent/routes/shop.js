const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    //Pass the array to the template so we can access it
   res.render('shop', {
       prods: products,
       docTitle: 'Shop',
   }); 
   //Send allows us to send a response
});
module.exports = router;