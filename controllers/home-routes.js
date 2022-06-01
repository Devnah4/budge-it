const router = require('express').Router();
const sequelize = require('../config/connection')

// Generates the homepage
router.get("/dashboard", (req, res) => {
    // Connects to the homepage handlebars file and generates it
    res.render('dashboard');
});

module.exports = router;