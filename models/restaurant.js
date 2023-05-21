const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const resSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("menu", resSchema);
