const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir,'../views','about.html'));
});
module.exports = router;