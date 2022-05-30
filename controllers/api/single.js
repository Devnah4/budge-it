const router = require("express").Router();
const { Single, User } = require("../../models");

// Get single entries
router.get("/", (req, res) => {
  // Finds all the entries
  Single.findAll({
    // Orders the entries by the date they were created
    order: [["created_at", "DESC"]],
    // States which attributes are allowed to be pulled
    attributes: ["id", "single_name", "single_amount"],
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

// Get single databse by id
router.get("/:id", (req, res) => {
  Single.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res
          .status(404)
          .json({ message: "No single entry found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Creates a single entry
router.post("/", (req, res) => {
  Single.create({
    single_name: req.body.single_amount,
    single_amount: req.body.single_amount,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit single info
router.put("/:id", (req, res) => {
    Single.update(
      {
        single_name: req.body.single_name,
        single_amount: req.body.single_amount,
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

// Delete a single entry
router.delete("/:id", (req, res) => {
    Single.destroy({
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