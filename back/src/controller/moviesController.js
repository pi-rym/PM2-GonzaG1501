const moviesS = require("../service/moviesService");

module.exports = {
  moviesC: async (req, res) => {
    try {
      const movies = await moviesS.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "error interno del servidor" });
    }
  },
};
