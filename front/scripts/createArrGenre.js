const { inputs } = require("./selectInputs");

const createArrGenre = () => {
  const genre = [];

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      genre.push(inputs[i].value);
    }
  }
  return genre;
};

module.exports = createArrGenre;
