const server = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon()
  .then((res) => {
    server.listen(3000, () => {
      console.log("servi-DOU");
    });
  })
  .catch((err) => {
    console.log("fallo al conectar con la DB. servi-DOU caido");
  });
