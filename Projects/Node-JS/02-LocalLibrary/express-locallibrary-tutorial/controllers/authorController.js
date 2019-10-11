var Author = require('../models/author');

//Display list of all Authors
exports.author_list = function(req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR LIST');
};

//Display detail page for a specific author
exports.author_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR DETAIL' + req.params.id);
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


