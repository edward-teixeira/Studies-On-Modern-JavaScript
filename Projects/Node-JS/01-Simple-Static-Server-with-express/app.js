const express = require('express');
const path = require('path');
const aboutRouter = require('./routes/about');
const rootDir = require('./utils/path');

//Init express
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

//Config the router
app.use('/about', aboutRouter);

app.get('/',(req, res) => {
    //console.log(path.join(rootDir, 'views/', 'index.html'));
    res.sendFile(path.join(rootDir, '../', 'views/', 'index.html'));
})

app.listen(3000, () => console.log('Express is running on port 3000'))