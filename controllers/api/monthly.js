const router = require("express").Router();
const { Monthly, User } = require("../../models");

// Get monthly entries
router.get("/", (req, res) => {
  // Finds all the entries
  Monthly.findAll({
    // Orders the entries by the date they were created
    order: [["created_at", "DESC"]],
    // States which attributes are allowed to be pulled
    attributes: ["id", "monthly_name", "monthly_amount"],
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

// Get monthly databse by id
router.get("/:id", (req, res) => {
  Monthly.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res
          .status(404)
          .json({ message: "No monthly entry found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Creates a monthly entry
router.post("/", (req, res) => {
  Monthly.create({
    monthly_name: req.body.monthly_amount,
    monthly_amount: req.body.monthly_amount,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit monthly info
router.put("/:id", (req, res) => {
    Monthly.update(
      {
        monthly_name: req.body.monthly_name,
        monthly_amount: req.body.monthly_amount,
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

// Delete a monthly entry
router.delete("/:id", (req, res) => {
    Monthly.destroy({
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
