const Book = require('../models/book');

const index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

const book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

const book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

const book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

const book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

const book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

const book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

const book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

const book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};

module.exports = {
    book_update_post,
    book_delete_post,
    book_create_post,
    book_detail,
    book_delete_get,
    book_update_get,
    book_create_post,
    book_create_get,
    book_list,
    index,
}
