const checkMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const stringYear = year.toString();
  const checkedURL = (url) => {
    const expURL = /^(ftp|http|https):\/\/[^ "]+$/;
    return expURL.test(url);
  };
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    next({ message: "faltan datos", statusCode: "400" });
  } else if (stringYear.length !== 4) {
    next({
      message: "tiene que ser un numero de 4 digitos",
      statusCode: "400",
    });
  } else if (!checkedURL(poster)) {
    next({ message: "No insertaste una URL", statusCode: "400" });
  } else next();
};

module.exports = checkMovie;
