const path = require('path');
const express = require('express');
const hbs = require('hbs');
//to point express to the public fodler
const app = express();
const viewsPath = path.join(__dirname, '../templates/views');
const publicDirPath = path.join(__dirname, '../public'); //append to dir name the public directory
//const templatePath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

//Partials: parts of reusable code for pages
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// Points to express folder, so it reads the html pages
app.use(express.static(publicDirPath));
//Call the pages and load data
app.get('', function (req, res) {
    res.render('index', {
        title: "Weather",
        name: "Edward",
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: "This is the about page",
        info: "This is the about paragraph",
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Edward',
    });
})
app.get('/weather', (request, response) => {
    response.send('<h1>This is the weather page!</h1>');
})

app.get('/help/*', (request, response) => {
    response.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.',
    })
})
app.get('*', (request, response) => {
    response.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    });
})
app.listen('3000', () => {
    console.log('It\'s running on port 3000'); //displays in terminal
});
//app.com
//app.com/help
//app.com/abou////t