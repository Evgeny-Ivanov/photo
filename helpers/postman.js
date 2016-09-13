var nodemailer = require("nodemailer");
var mail = require("../cfg/mail");

var transporter = nodemailer.createTransport({
    port: 465,
    secure: true, // use SSL
    host: "smtp.mail.ru",
    auth: {
        user: mail.emailPostman,
        pass: mail.password
    }
});

module.exports.sendEmailMessage = function({email, message, subject="тема письма", }){
    var mailOptions = {
        from: mail.emailPostman,
        to: email,
        subject: subject,
        html: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.error('Ошибка отправки: ' + error);
        }
        else {
            console.log('Письмо успешно отправлено: ' + info.response);
        }
    });
};