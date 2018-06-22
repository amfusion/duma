var express = require('express');
var router = express.Router();
var ps = require('../public/javascripts/ps');

/* GET home page. */
router.get('/', (req, res) => {
    var psList = {};

    ps.list('node.exe').then(result => {
        psList = result;

        res.render('index', {
            title: 'DUMP !!',
            processList: psList
        });
    });
});

router.get('/list/:name', (req, res) => {
    var psList = {};

    ps.list(req.params.name).then(result => {
        psList = result;

        res.render('index', {
            title: 'Aloha',
            processList: psList
        });
    });
});

module.exports = router;