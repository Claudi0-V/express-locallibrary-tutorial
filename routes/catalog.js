var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('catalog');
});

router.get('/:objects', function(req, res, next) {
    res.render('catalog');
});

router.get('/:objects/create', function(req, res, next) {
    res.render('catalog');
});

router.get('/:objects/:id', function(req, res, next) {
    res.render('catalog');
});

router.get('/:objects/:id/update', function(req, res, next) {
    res.render('catalog');
});

router.get('/:objects/:id/delete', function(req, res, next) {
    res.render('catalog');
});



module.exports = router;
