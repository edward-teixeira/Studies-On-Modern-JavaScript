var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

//Display list of all books.
exports.index =  async function(req, res, next) {
    try{
       book_count = await Book.countDocuments({})
       book_instance_count = await BookInstance.countDocuments({}),
       book_instance_available_count = await BookInstance.countDocuments({status: 'Available'}),
       author_count = await Author.countDocuments({}),
       genre_count = await Genre.countDocuments({})
       res.render('index', { title: 'Local Library Home', data: {book_count,book_instance_count,book_instance_available_count,author_count,genre_count}});
    }catch(error){
        res.render('index', {title: 'Not Found', error});
    }
}
// Display list of all Books with title and author.
exports.book_list = async function(req, res, next) {
    try {
    //a list of books with title and author fields; populate return the property of each book that we want to work with
     book_list = await Book.find({}, 'title author').populate('author');
     res.render('book_list', { title: 'Book List', book_list});   
    }catch(error) {
          res.render('book_list', { title: 'Book List', error}); 
    }
    
};
// Display detail page for a specific book.
exports.book_detail = async function(req, res, next) {
    try{
        const book = await Book.findById(req.params.id)
              .populate('author')
              .populate('genre');
        const book_instances = await BookInstance.find({ 'book': req.params.id });
        
        if(book==null){
            const err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('book_detail', { title: book.title, book, book_instances});
    }catch(error) {
        res.render('book_detail', { title: results.book.title,error});
    }
};



// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};