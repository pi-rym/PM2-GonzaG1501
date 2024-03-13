const { Router } = require("express");
const moviesR = require("./moviesRouter");

const router = Router();

router.use("/movies", moviesR);

module.exports = router;
