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
    throw new error.message();
  }
};

const clear = () => {
  document.getElementById("formu").reset();
};
document.getElementById("resetButton")?.addEventListener("click", (event) => {
  event.preventDefault();
  clear();
});

const action = document.getElementById("action");
const adventure = document.getElementById("adventure");
const fantasy = document.getElementById("fantasy");
const sciFi = document.getElementById("sci-fi");
const drama = document.getElementById("drama");
const comedy = document.getElementById("comedy");

const inputs = [action, adventure, fantasy, sciFi, drama, comedy];

const createArrGenre = () => {
  const genre = [];

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      genre.push(inputs[i].value);
    }
  }
  return genre;
};

const checkedInput = (event) => {
  event.target.checked;
};

action?.addEventListener("click", checkedInput);
adventure?.addEventListener("click", checkedInput);
fantasy?.addEventListener("click", checkedInput);
sciFi?.addEventListener("click", checkedInput);
drama?.addEventListener("click", checkedInput);
comedy?.addEventListener("click", checkedInput);

const checkArr = () => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      return true;
    }
  }
};

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

module.exports = { get, post, submit, clear };
