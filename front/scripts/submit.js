const checkArr = require("./eventsCheck");
const createArrGenre = require("./createArrGenre");
const { post } = require("./handler");
const clear = require("./clearForm");

const submit = () => {
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const checkGenre = checkArr();
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;
  const genre = createArrGenre();
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !checkGenre ||
    !rate ||
    !poster
  ) {
    return alert("Debes completar todos los datos para continuar");
  } else post({ title, year, director, duration, genre, rate, poster });
  clear();
};

module.exports = submit;
