// This is a separate module...any "movie" related code goes in this module
// We want to "export" this movies related code and import the code into the main app.js file
// We can specify the specific code to be exported by using module.exports

function printStarWars(){
    console.log("Star Wars: PG");
}

function printIndianaJones(){
    console.log("Indiana Jones: PG-13");
}

module.exports.starWars = printStarWars; // create a variable (starWars) after module.exports and assign the printStarWars function to it
                                        //Note: no parenthesis after the function name when the function is assigned to the variable
// so far, we are only exporting the printStarWars function - which is now the starWars variable
// not exporting anything with IndianaJones yet