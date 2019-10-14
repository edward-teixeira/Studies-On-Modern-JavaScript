var Genre = require('../models/genre');
var Book = require('../models/book');
const validator = require('express-validator');

// Display list of all Genre.
exports.genre_list = async function(req, res) {
    try{
        const genre_list = await Genre.find()
            .sort([['name', 'asc']]);
        res.render('list_genre',{title:'All Genres', genre_list});
    }catch(error) {
        res.render('list_genre',{title:'NOT FOUND', error});
    }
};

// Display detail page for a specific Genre.
exports.genre_detail = async function(req, res) {
    try {
        const genre = await Genre.findById(req.params.id);
        console.log(genre);
        const genre_books = await Book.find({'genre': req.params.id});
        res.render('genre_detail', {genre, genre_books});
    } catch (error) {
        console.log(error);
    }
};
// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    //Render the form
    res.render('genre_form', {title: 'Create Genre'});
};

// Handle Genre create on POST.
exports.genre_create_post =  [
  //Sanitazation: Sometimes, receiving input in a HTTP request isn't only about making sure that the data is in the right format, but also that it is free of noise. 
  // !Validate that the name field is not empty.
  validator.body('name', 'Genre name required').isLength({ min: 1 }).trim(),
  //!Sanitize (escape) the name field.
  validator.sanitizeBody('name').escape(),

  // *Process request after validation and sanitization.
  (req, res, next) => {

    // Extract the validation errors from a request.
    const errors = validator.validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var genre = new Genre(
      { name: req.body.name }
    );

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
      return;
    }
    else {
      // Data from form is valid.
      // Check if Genre with same name already exists.
      Genre.findOne({ 'name': req.body.name })
        .exec( function(err, found_genre) {
           if (err) { return next(err); }

           if (found_genre) {
             // Genre exists, redirect to its detail page.
             res.redirect(found_genre.url);
           }
           else {

             genre.save(function (err) {
               if (err) { return next(err); }
               // Genre saved. Redirect to genre detail page.
               res.redirect(genre.url);
             });
           }
         });
    }
  }
];

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};