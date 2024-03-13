const render = require("./render");
const axios = require("axios");

const get = async () => {
  try {
    const data = await axios("http://localhost:3000/movies");
    render(data.data);
  } catch {
    throw new error(alert("no se encontro la API")); //estudiar la funcion del "throw"
  }
};
// function get(){
//      axios("https://students-api.2.us-1.fl0.io/movies");
//     .then((data)=> render(data.data))
//     .catch((error)=> console.log(error.message)
// }

module.exports = get;
