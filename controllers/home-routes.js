const router = require('express').Router();
const sequelize = require('../config/connection')

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('login');
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('signup');
});

// Generates the homepage
router.get("/", (req, res) => {
    // Connects to the homepage handlebars file and generates it
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;