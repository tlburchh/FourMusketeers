const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
