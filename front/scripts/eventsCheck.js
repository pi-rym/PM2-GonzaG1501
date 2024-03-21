const {
  action,
  adventure,
  fantasy,
  sciFi,
  drama,
  comedy,
  inputs,
} = require("./selectInputs");

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

module.exports = checkArr;
