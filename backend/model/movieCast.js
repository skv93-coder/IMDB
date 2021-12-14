const mongoose = require("mongoose");

const movieCastSchema = new mongoose.Schema({
  name: { type: String, requiredL: true, max: 20, min: 2 },
  dateOfBirth: { type: Date, required: true },
  alias: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("MovieCast", movieCastSchema);
