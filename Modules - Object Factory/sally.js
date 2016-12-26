var movies = require('./movies');  // import from movies.js

var sallysMovies = movies();
sallysMovies.favMovie = "The Notebook";
console.log("Sally's favorite movie is: " + sallysMovies.favMovie);