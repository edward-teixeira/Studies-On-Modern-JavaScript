var Author = require('../models/author');
var Book = require('../models/book');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all Authors.
exports.author_list = async function(req, res, next) {

  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
    try {
    const author_list = await Author.find()
      .sort([['family_name', 'ascending']]);
    res.render('author_list', {title: 'Author List', author_list});
    }catch(error) {
    res.render('author_list', {title: 'Author List', error});
    }
};

// Display detail page for a specific Author.
exports.author_detail = async function(req, res, next) {
    try {
        const author = await Author.findById(req.params.id);
        const author_books = await Book.find({ 'author': req.params.id },'title summary');
        
        if (author==null) { // No results.
          var err = new Error('Author not found');
          err.status = 404;
          return next(err);
        }
        res.render('author_detail', { title: 'Author Detail', author, author_books } );
      }catch(error) {
        res.render('author_detail', { title: 'Author Detail', error});
      }
};
//Display Author create form on GET
exports.author_create_get = function(req, res) {
   res.render('author_form', { title: 'Create Author'}); 
};

// Handle Author create on Post
exports.author_create_post =[

    // Validate fields.
    body('first_name').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601(),

    // Sanitize fields.
    sanitizeBody('first_name').escape(),
    sanitizeBody('family_name').escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('date_of_death').toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('author_form', { title: 'Create Author', author: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.
            var author = new Author(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    date_of_birth: req.body.date_of_birth,
                    date_of_death: req.body.date_of_death
                });
            author.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect(author.url);
            });
        }
    }
]; 

//DIsplay Author delete form on get
exports.author_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR DELETE get');
};

//Handle Author delete on POST
exports.author_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR delete post');
};

//DIsplay Author update form on get
exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: author update GET');
};

//Handle Author update on POST
exports.author_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: author update POST');
};


