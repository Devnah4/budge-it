const router = require('express').Router();
const sequelize = require('../config/connection');

router.get("/", (req, res) => {
    // Connects to the dashboard handlebars file and generates it
    res.render('dashboard');
    loggedIn: req.session.loggedIn
});

module.exports = router;