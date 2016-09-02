var express = require('express');
var router = express.Router();
var main = require('../app');   
var upload = main.upload;
var WorkModel = require('../models/works');

router.get('/', function (req, res) {
    WorkModel.find(function (err, result) {
        res.render('works.html', {works: result});
    });
});

router.post('/', upload.single("img"), function (req, res) {
    if(req.isUnauthenticated()){
        res.send("Пошел к черту");
    }
    var workModel = new WorkModel({
        tinyImg: "\\" + req.file.filename,
        bigImg: "\\" + req.file.filename
    });
    workModel.save(function (err) {
        console.error(err);
    });
    res.send("OK");
});

module.exports = router;
