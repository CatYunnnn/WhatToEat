const mongoose = require("mongoose");
const menu = require("../restaurant");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

const menuSeeds = [
  {
    name: "小豬很忙滷味",
    type: "點心",
  },
  {
    name: "MR.38 curry",
    type: "正餐",
  },
  {
    name: "金鮮蝦捲飯",
    type: "正餐",
  },
  {
    name: "常常手做",
    type: "點心",
  },
  {
    name: "開源社香雞排",
    type: "消夜",
  },
];
db.once("open", () => {
  console.log("mongodb connected!");
  for (let i = 0; i < menuSeeds.length; i++) {
    menu.create({ ...menuSeeds[i] });
  }
  if (menu.length >= menuSeeds.length) process.exit();
});
