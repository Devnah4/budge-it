const router = require('express').Router();
const sequelize = require('../config/connection')

// Generates the homepage
router.get("/", (req, res) => {
    // Connects to the homepage handlebars file and generates it
    res.render('homepage');
    loggedIn: req.session.loggedIn
});

module.exports = router;