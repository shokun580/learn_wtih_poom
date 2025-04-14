const express = require("express");
var router = express.Router();
const userCon = require("../controllers/userController");

router.get("/user/:user_id", (req, res) => {
  const user = new userCon();
  const user_id = req.params.user_id;
  user
    .getUser(user_id)
    .then((response) => {
      //res.send("user : "+user_id)
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

router.get("/user", (req, res) => {
  const user = new userCon();
  user
    .getAlluser()
    .then((response) => {
      //res.send("all users")
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
