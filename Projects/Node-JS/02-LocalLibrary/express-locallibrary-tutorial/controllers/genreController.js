var Genre = require('../models/genre');
var Book = require('../models/book');

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
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

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