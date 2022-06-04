const router = require('express').Router()
const { User, Expense, Income } = require('../../models')

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
        include: [
          {
            model: Income
          },
          {
            model: Expense
          }
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
})

router.get("/:id", (req, res) => {
    // Finds a specified user
    User.findOne({
      // Prevents the password from being pulled
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Income
        },
        {
          model: Expense
        }
      ]
    }).then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // POST /api/users
  router.post("/", (req, res) => {
    // Sets the information that must be put in
    User.create({
      // requires the username, email, and password
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then(dbUserData => {
      req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username
          req.session.loggedIn = true

          res.json(dbUserData)
      })
    }).catch(err => { 
      console.log(err);
      res.status(500).json(err);
  });
  });

  router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' })
            return
        }
        
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        })
    })
})

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end()
      })
  } else {
      res.status(404).end()
  }
})
  
  // DELETE /api/users/1
  // Deletes the information stored in user at this id
  router.delete("/:id", (req, res) => {
    // Sets the table to be deleted
    User.destroy({
      where: {
        // Specifies the exact location where it will delete data from
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          // Will send a message saying it cannot find the user
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      // Returns a response should there be an error
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router