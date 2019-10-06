const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override')
const session = require('express-session');
const mongoose = require("mongoose");

const app = express();
//Connect to mongoose
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vidjot-dev', {
    useMongoClient: true  
})
  .then(() => {
      console.log('connected with mongodb')
  })
  .catch(err => console.log(err));

  //Load Idea Model
  require('./models/idea');
  const Ideas = mongoose.model('ideas');
  
//  Handlebars Middleware 
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Method override middleware
app.use(methodOverride('_method'));
//Session method middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
//connect-flash middlware
app.use(flash());
//Global variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.success_msg = req.flash('error_msg');
    res.locals.success_msg = req.flash('error');
    next();
});

//Global variables
//Idea Index Page
app.get('/ideas', (req, res) => {
    //fetch ideas from db
    Ideas.find({})
        .sort({date:"desc"})
        .then(ideas => {
        return res.render('ideas/index', {
            ideas
        });
        })
        .catch(err => console.log(err));
})

// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome';
   res.render('index',{
   title: title
   }); 
});
// fetch ideas by id
app.get('/ideas/edit/:id', (req,res) => {
    Ideas.findOne({
        _id: req.params.id
    }) 
    .then(idea => {
    res.render('ideas/edit', {
        idea: idea
    })
    });
})

//Add Idea Form
app.get('/ideas/add', (req,res) => {
    res.render('ideas/add')
});
// Process form
app.post('/ideas', (req, res) => {
   let errors = [];
   if(!req.body.title) errors.push({text: "Please add a title"});
   if(!req.body.details) errors.push({text: "Please add some details"});

   //if there is error, re-render the form
   if(errors.length > 0 ){
       res.render('ideas/add'),{
        errors: errors,
        title: req.body.title,
        details: req.body.details
       }
   } else {
       const newUser = {
        title: req.body.title,
        details: req.body.details
       };
       new Ideas(newUser)
        .save()
        .then(idea => {
             req.flash('success_msg', 'Video idea removed');
             res.redirect('/ideas');
        })
        .catch(err => console.log(err));
   }
});
// Edit form process
app.put('/ideas/:id', (req, res) => {
    
    Ideas.findOne({
        _id: req.params.id})
    .then(idea => {
        //new values
        idea.title = req.body.title;
        idea.details = req.body.details;
        idea.save()
        .then(idea => {
            req.flash('success_msg', 'Video idea updated');
            res.redirect('/ideas');
        })
    })

})

//About Route 
app.delete('/about', (req, res) => {
    res.render(`about`);
});

//Delete idea
app.delete('/ideas/:id', (req,res) => {
    Ideas.remove({
        _id: req.params.id
    }).then(() =>{
        req.flash('success_msg', 'Video idea removed');
          res.redirect('/ideas')
    });
})

app.listen(5000, () => {
    console.log(`It\s running on port 5000`)
})