const axios = require("axios");

function get() {
  const movies = axios("https://students-api.up.railway.app/movies");
  movies
    .then((data) => console.log(data.data))
    .catch((error) => {
      console.log(error.message);
    });
}

get();
