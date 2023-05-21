const express = require("express");
const router = express.Router();
const home = require("./modules/home");
const menus = require("./modules/menus");
router.use("/menus", menus);
router.use("/", home);
module.exports = router;
