const router = require("express").Router();
const { Yearly, User } = require("../../models");

// Get Yearly entries
router.get("/", (req, res) => {
  // Finds all the entries
  Yearly.findAll({
    // Orders the entries by the date they were created
    order: [["created_at", "DESC"]],
    // States which attributes are allowed to be pulled
    attributes: ["id", "yearly_name", "yearly_amount"],
    include: [
      {
        model: User,
        attributes: ["id"],
      },
    ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get early databse by id
router.get("/:id", (req, res) => {
  Yearly.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res
          .status(404)
          .json({ message: "No yearly entry found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Creates a yearly entry
router.post("/", (req, res) => {
  Yearly.create({
    yearly_name: req.body.yearly_amount,
    yearly_amount: req.body.yearly_amount,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit yearly info
router.put("/:id", (req, res) => {
    Yearly.update(
      {
        yearly_name: req.body.yearly_name,
        yearly_amount: req.body.yearly_amount,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No data found with this ID!" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  })

// Delete a yearly entry
router.delete("/:id", (req, res) => {
    Yearly.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No Data found with this ID!" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;