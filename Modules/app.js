// In Node JS, the different files that you break up a web app are called "modules"
// In modules, you group similar code together

// Whenever you are importing code from another module, you set it equal to a variable
// To import you need to use the require() function

var movies = require('./movies');
// variable here        module name here (don't include the .js extension)

//Note: the ./ in front of the module file name refers to the fact that its in the same directory as the main file
// In other words, app.js and movies.js are both in the same directory

// Now we can use the movies variable that we created to access the starWars variable (function) from movies.js:
movies.starWars();



