var movies = require('./movies');  // import from movies.js

// for demonstration, we dont set Peter's favorite movie here so we can see that when Sally sets her
// favorite movie, it affects the default reference to the favMovie variable in movies.js so therefore
// both Peter's and Sally's favMovies is set to the Notebook

console.log("Peter's favorite movie is: " + movies.favMovie);
