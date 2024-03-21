const server = require("./src/server");
const dbCon = require("./src/config/dbCon");
require("dotenv").config();
const port = process.env.PORT;

dbCon()
  .then((res) => {
    server.listen(port, () => {
      console.log("servi-DOU");
    });
  })
  .catch((err) => {
    console.log("fallo al conectar con la DB. servi-DOU caido");
  });
