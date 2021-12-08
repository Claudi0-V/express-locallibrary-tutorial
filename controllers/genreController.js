const Genre = require('../models/genre');

const genre_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre list');
};

const genre_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

const genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

const genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

const genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

const genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

const genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

const genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};

module.exports = {
    genre_update_post,
    genre_delete_post,
    genre_delete_get,
    genre_create_post,
    genre_update_get,
    genre_list,
    genre_detail,
    genre_create_get
}
