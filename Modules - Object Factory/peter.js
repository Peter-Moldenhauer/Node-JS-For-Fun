var movies = require('./movies');  // import from movies.js

var petersMovies = movies();
petersMovies.favMovie = "The Matrix";
console.log("Peter's favorite movie is: " + petersMovies.favMovie);
