var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('about.html', {pageTestScripts: 'qa/tests-about.js'});
});

module.exports = router;