var express = require('express');
var router = express.Router();
var ServicesModel = require('../models/services');

router.get('/', function (req, res) {
    ServicesModel.find(function (err, result) {
        res.render('prices.html', {items: result});
    });
});

router.get('/:service', function (req, res) {
    var service = req.param("service");
    ServicesModel.findOne({name: service}, function (err, result) {
        res.render('service.html', {service: result});
    });
});

module.exports = router;
