const { get, submit } = require("./handler");

document.addEventListener("DOMContentLoaded", async () => {
  await get();
});

document.getElementById("submitButton").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});
