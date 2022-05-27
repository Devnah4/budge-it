const router = require('express').Router()
const { User, Monthly, Yearly, Single, Income } = require('../../models')

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
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
    })
      .then((dbUserData) => {
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
    // should expect {usernam: 'value', email: 'value@value.com', password: 'value'}
    console.log(req.body);
    // Sets the information that must be put in
    User.create({
      // requires the username, email, and password
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then(dbUserData => {
      console.log(dbUserData);
      res.json(dbUserData);
    }) .catch(err => { 
      console.log(err);
      res.status(500).json(err);
  });
  });
  
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