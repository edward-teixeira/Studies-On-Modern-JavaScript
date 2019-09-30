const path = require('path');
const express = require('express');
//to point express to the public fodler
const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));
/* app.get('/', (request, response) => {
    response.send(`<h1>Hello Express</h1>`); // Displays in the browser for the user

}) */
app.get('/weather', (request, response) => {
    response.send('<h1>This is the weather page!</h1>');
})
app.listen('3000', () => {
    console.log('It\'s running on port 3000'); //displays in terminal
});
//app.com
//app.com/help
//app.com/about