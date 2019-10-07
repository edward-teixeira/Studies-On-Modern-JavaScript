const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const myPath = (path.join(__dirname, '../','views','shop.html'));

router.get('/', (req, res, next) => {
   res.sendFile(path.join(rootDir,'views','shop.html' )); 
    //Send allows us to send a response
});

module.exports = router;