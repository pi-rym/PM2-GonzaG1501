const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const indexR = require("./routes/");

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use(indexR);

module.exports = server;
