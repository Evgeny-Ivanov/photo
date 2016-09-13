var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var multer  = require('multer');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var AuthLocalStrategy = require('passport-local').Strategy;
var adminUser = require('./cfg/admin');
var app = express();

app.use(express.static('static'));
app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));

nunjucks.configure('templates', {
    watch: true,
    autoescape: true,
    express: app
});

passport.use('local', new AuthLocalStrategy(
    function (username, password, done) {
        if(username == adminUser.username &&
            password == adminUser.password){
            return done(null, {
                username: "admin",
                photoUrl: "url_to_avatar",
                profileUrl: "url_to_profile"
            });
        }

        return done(null, false, {
            message: 'Неверный логин или пароль'
        });
    }
));

app.use(session({ secret: `My momma always said, 
                           «Life was like a box of chocolates.
                           You never know what you're gonna get».`
        }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, JSON.stringify(user));
});


passport.deserializeUser(function (data, done) {
    try {
        done(null, JSON.parse(data));
    } catch (err) {
        done(err);
    }
});

app.use(function (req,   res, next) {
    res.locals.user = req.user;
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});

const dbUrl = 'mongodb://localhost:27017/photo';
mongoose.connect(dbUrl);


var upload = multer({ dest: 'uploads/' });

module.exports.upload = upload;
module.exports.mongoose = mongoose;
module.exports.app = app;

var about = require('./routes/about');
var contacts = require('./routes/contacts');
var prices = require('./routes/prices');
var reviews = require('./routes/reviews');
var works = require('./routes/works');
var admin = require('./routes/admin');

app.use('/', about);
app.use('/contacts', contacts);
app.use('/prices', prices);
app.use('/reviews', reviews);
app.use('/works', works);
app.use('/admin', admin);

app.use(function(req, res) {
    res.status(404);
    res.render("404.html");
});

app.use(function (err, res, req, next) {
    console.error(err.stack);
    res.status(500);
    res.render("500.html");
});

app.set("PORT", 8000);

app.listen(app.get("PORT"), function () {
    console.log('Server listening on port ' + app.get("PORT"));
});