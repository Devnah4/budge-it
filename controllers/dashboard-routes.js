const router = require('express').Router();
const sequelize = require('../config/connection');
const { Income, Expense, User } = require('../models')

router.get("/", (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        },
        // States which attributes are allowed to be pulled
        include: [
          {
              model: Income
          },
          {
              model: Expense
          }
        ],
    }).then(dbUserData => {
        const budget = dbUserData.get({ plain: true })
        res.render('dashboard', {
        budget,
        loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});
    
module.exports = router;