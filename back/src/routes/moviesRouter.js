const { Router } = require("express");
const {moviesC} = require("../controller/moviesController");

const moviesR = Router();

moviesR.get("/", moviesC);

module.exports = moviesR;