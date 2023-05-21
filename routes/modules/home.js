const express = require("express");
const router = express.Router();
const menu = require("../../models/restaurant");
let temp = 0;
router.get("/", (req, res) => {
  temp = 0;
  menu
    .find()
    .lean()
    .sort({ name: "asc" })
    .then((menus) => {
      res.render("index", { menus });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/meal", (req, res) => {
  temp = 1;
  menu
    .find({ type: "正餐" })
    .lean()
    .sort({ name: "asc" })
    .then((menus) => {
      res.render("index", { menus });
    })
    .catch((err) => {
      console.log(err);
      res.render("errorPage", { error: err.message });
    });
});

router.get("/night", (req, res) => {
  temp = 2;
  menu
    .find({ type: "消夜" })
    .lean()
    .sort({ name: "asc" })
    .then((menus) => {
      res.render("index", { menus });
    })
    .catch((err) => {
      console.log(err);
      res.render("errorPage", { error: err.message });
    });
});
router.get("/dessert", (req, res) => {
  temp = 3;
  menu
    .find({ type: "點心" })
    .lean()
    .sort({ name: "asc" })
    .then((menus) => {
      res.render("index", { menus });
    })
    .catch((err) => {
      console.log(err);
      res.render("errorPage", { error: err.message });
    });
});

router.get("/drinks", (req, res) => {
  temp = 4;
  menu
    .find({ type: "飲料" })
    .lean()
    .sort({ name: "asc" })
    .then((menus) => {
      res.render("index", { menus });
    })
    .catch((err) => {
      console.log(err);
      res.render("errorPage", { error: err.message });
    });
});
router.get("/others", (req, res) => {
  temp = 5;
  menu
    .find({ type: "其他" })
    .lean()
    .sort({ name: "asc" })
    .then((menus) => {
      res.render("index", { menus });
    })
    .catch((err) => {
      console.log(err);
      res.render("errorPage", { error: err.message });
    });
});

router.get("/random", (req, res) => {
  const type = ["全部", "正餐", "消夜", "點心", "飲料", "其他"];
  if (temp === 0) {
    menu
      .find()
      .lean()
      .sort({ name: "asc" })
      .then((menus) => {
        const menusArray = menus.map((menu) => menu);
        let result = menusArray[randomFunction(menusArray)];
        result = `你抽到的是${result.name}!`;
        res.render("index", { menus, result });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    menu
      .find({ type: type[temp] })
      .lean()
      .sort({ name: "asc" })
      .then((menus) => {
        if (menus.length < 1) {
          let result = "這個類別裡還沒建立餐廳喔";
          res.render("index", { menus, result });
        } else {
          console.log(menus);
          const menusArray = menus.map((menu) => menu);
          let result = menusArray[randomFunction(menusArray)];
          result = `你抽到的是${result.name}!`;
          res.render("index", { menus, result });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

const randomFunction = function (arr) {
  const randomInt = Math.floor(Math.random() * arr.length);
  return randomInt;
};
module.exports = router;
