const axios = require("axios");
const render = require("./render");

const get = async () => {
  try {
    const data = await axios("http://localhost:3000/movies");
    render(data.data);
  } catch {
    throw new error(alert("no se encontro la API"));
  }
};

const post = async (obj) => {
  try {
    await axios.post("http://localhost:3000/movies", obj);
  } catch (error) {
    alert(error.response.data.error);
  }
};

module.exports = { get, post };
