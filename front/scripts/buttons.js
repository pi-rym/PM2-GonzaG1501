const submit = require("./submit");
const clear = require("./clearForm");

document.getElementById("submitButton").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});

document.getElementById("resetButton")?.addEventListener("click", (event) => {
  event.preventDefault();
  clear();
});
