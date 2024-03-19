const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: Array,
  rate: Number,
  poster: String,
});

const Movie = mongoose.model("Movie", movie);

module.exports = Movie;
