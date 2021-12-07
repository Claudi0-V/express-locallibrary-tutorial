const Author = require('../models/author');

const author_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

const author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

const author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

const author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

const author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

const author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

const author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

const author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};

module.export = {
    author_list,
    author_detail,
    author_create_get,
    author_create_post,
    author_delete_get,
    author_delete_post,
    author_update_get,
    author_update_post,
}
