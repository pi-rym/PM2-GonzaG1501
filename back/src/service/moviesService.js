const axios = require("axios");
const Movie = require("../models/Movie");

class Movies {
  constructor(movie) {
    const { title, director, poster, year, duration, genre, rate, _id } = movie;
    if (!title || !director || !poster) {
      throw new Error("Faltan datos");
    }
    this.id = _id;
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

// const movies = [
//   {
//     title: "Guardians of the Galaxy Vol. 2",
//     year: 2017,
//     director: "James Gunn",
//     duration: "2h 16min",
//     genre: ["Action", "Adventure", "Comedy"],
//     rate: 7.7,
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//   },
//   {
//     title: "Star Wars: Episode IV - A New Hope",
//     year: 1977,
//     director: "George Lucas",
//     duration: "2h 1min",
//     genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//     rate: 8.7,
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//   },
//   {
//     title: "The Lord of the Rings: The Fellowship of the Ring",
//     year: 2001,
//     director: "Peter Jackson",
//     duration: "2h 58min",
//     genre: ["Action", "Adventure", "Drama", "Fantasy"],
//     rate: 8.8,
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//   },
// ];

const moviesS = {
  getMovies: async () => {
    try {
      // const moviesData = await axios("https://students-api.up.railway.app/movies");
      // return moviesData.data.map((movie) => new Movies(movie));
      // return movies.map((movie) => new Movies(movie));
      const moviesData = await Movie.find();
      return moviesData.map((movie) => new Movies(movie));
    } catch (error) {
      return "Error", error.message;
    }
  },
};

module.exports = moviesS;
