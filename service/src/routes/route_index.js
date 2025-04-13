const express = require("express");
var router = express.Router();
const pool = require("../config/db_connect");
const departmentsCon = require("../controllers/departmentController");

const depart = new departmentsCon();



router.get("/departments", (req, res) => {
  const department = new departmentsCon();
  department.getfirstDepartment(req, res).then((response) => {
    res.json(response);
  }).catch((err) => {
    console.log(err);
    res.status(500).send("Internal Server Error");
  });
});





module.exports = router;