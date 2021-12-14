const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: { type: String, requiredL: true, max: 20, min: 2 },
  yearOfRelease: { type: Date, required: true },
  actors: [{ type: mongoose.Types.ObjectId, ref: "MovieCast", required: true }],
  director: { type: mongoose.Types.ObjectId, ref: "MovieCast", required: true },
  description: { type: String },
});

module.exports = mongoose.model("Movie", movieSchema);
