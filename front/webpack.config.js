module.exports = {
  // mode:"development",
  entry: {
    index: "./scripts/index.js",
    form: "./scripts/buttons.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/browser",
  },
};
