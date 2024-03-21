const { Router } = require("express");
const { moviesC, moviesCreate } = require("../controller/moviesController");
const checkMovie = require("../middleware/checkMovie");

const moviesR = Router();

moviesR.get("/", moviesC);
moviesR.post("/", checkMovie, moviesCreate);

module.exports = moviesR;
