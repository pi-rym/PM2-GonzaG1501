const createTarget = require("./createTarget")

const selectContent = document.getElementById("content");

const render = arr => arr.forEach(obj => {
    const target = createTarget(obj);
    selectContent.appendChild(target)
})

module.exports = render