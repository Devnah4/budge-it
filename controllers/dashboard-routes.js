const router = require('express').Router();
const sequelize = require('../config/connection');

router.get("/", (req, res) => {
    // Connects to the dashboard handlebars file and generates it
    res.render('dashboard');
});

module.exports = router;