const moviesS = require("../service/moviesService");

module.exports = {
  moviesC: async (req, res, next) => {
    try {
      const movies = await moviesS.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      next({ message: "Error interno del servidor", statusCode: 500 });
    }
  },
  moviesCreate: async (req, res, next) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      await moviesS.createMovies({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).send("Pelicula creada correctamente");
    } catch (error) {
      next({ message: "Error en crear", statusCode: 400 });
    }
  },
};
