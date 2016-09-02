var express = require('express');
var router = express.Router();
var main = require('../app');
var upload = main.upload;
var ReviewsModel = require("../models/reviews");

router.get('/', function (req, res) {
    ReviewsModel.find(function (err, result) {
        res.render('reviews.html', {reviews: result});
    });
});

router.post('/', upload.single("img"), function (req, res) {
    var body = req.body;
    var review = {
        img: "\\" + req.file.filename,
        name: body.name,
        message: body.review
    };
    console.log(req.file);
    console.log(review);
    var reviewsModel = new ReviewsModel(review);
    reviewsModel.save(function (err) {
       if(err){
           throw err;
       }
        ReviewsModel.find(function (err, result) {
            res.render('reviews.html', {reviews: result});
        });
    });
});

router.post('/delete', function (req, res) {
    if(req.isUnauthenticated()){
        res.send("Пошел к черту");
    }
    console.log(req.body.id);
    ReviewsModel.findOneAndRemove({_id: req.body.id}, function (err) {
        if(err){
            throw err;
        }
    });
    res.send("OK");
});

module.exports = router;
