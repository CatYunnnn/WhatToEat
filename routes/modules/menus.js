const express = require("express");
const router = express.Router();
const menu = require("../../models/restaurant");

router.get("/new", (req, res) => {
  return res.render("new");
});

router.post("/new", (req, res) => {
  menu
    .create({
      ...req.body,
    })
    .then(() => {
      res.redirect("/");
    });
});

router.delete("/:_id", (req, res) => {
  menu
    .deleteOne({ _id: req.params._id })
    .then(() => res.redirect("/"))
    .catch((err) => {
      console.log(err);
      res.render("errorPage", { error: err.message });
    });
});
module.exports = router;
