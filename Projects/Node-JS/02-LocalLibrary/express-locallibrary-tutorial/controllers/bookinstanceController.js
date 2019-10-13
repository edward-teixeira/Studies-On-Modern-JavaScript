var BookInstance = require('../models/bookinstance');


// Display list of all BookInstances.
exports.bookinstance_list = async function(req, res, next) {
    try {
        const bookinstance_list = await BookInstance.find().populate('book');
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list});
    } catch (error) {
      res.render('bookinstance_list', { title: 'NOT FOUND', error});   
    }
    
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail =  async function(req, res) {
    try {
        const bookinstance = await BookInstance.findById(req.params.id).populate('book');
        if(bookinstance === null) {
          var err = new Error('Book copy not found');
          err.status = 404;
          return next(err);
        }
        res.render('bookinstance_detail', {title: `Copy of ${bookinstance.book.title}`, bookinstance});
    } catch (error) {
        res.render('bookinstance_detail', {title: 'Not Found', error});
    }
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};