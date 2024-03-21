const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
  duration: { type: String, required: true },
  genre: { type: Array, required: true },
  rate: { type: Number, required: true },
  poster: { type: String, required: true },
});

const Movie = mongoose.model("Movie", movie);

module.exports = Movie;
