var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get("/", function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
        return;
    }

    res.render("admin.html");
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/admin?error=true',
    session: true})
);


module.exports = router;