var Author = require('../models/author');
var Book = require('../models/book');

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
  res.send('Not implemented: Author create GET');
};

// Handle Author create on Post
exports.author_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create post');
};

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


