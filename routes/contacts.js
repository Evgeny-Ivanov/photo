var express = require('express');
var router = express.Router();
var postman = require('../helpers/postman');
var main = require('../app');
var mail = require('../cfg/mail');
var upload = main.upload;

router.get('/', function (req, res) {
    res.render('contacts.html');
});

router.post('/', upload.array(), function (req, res) {
    var body = req.body;
    console.log(body);
    postman.sendEmailMessage({
        email: mail.email,
        message: pasrseForm(body)
    });
    res.send("OK");
});

function pasrseForm({email, message, phone, name}){
    return `<p><b>Имя:</b> ${name},</p>
            <p><b>Email:</b> ${email},</p>
            <p><b>Телефон:</b> ${phone}</p>,
            <p><b>Сообщение:</b> ${message}</p>`;
}

module.exports = router;
