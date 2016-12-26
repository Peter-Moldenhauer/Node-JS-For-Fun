/*

function printStarWars(){
    console.log("Star Wars: PG");
}

function printIndianaJones(){
    console.log("Indiana Jones: PG-13");
}

module.exports.starWars = printStarWars;  // export starWars variable/function
module.exports.indianaJones = printIndianaJones;  // export indianaJones variable/function

*/



// Instead of writing the above code (which seems repetitive, we can use the method below):

module.exports = {  // any code in this object gets exported
    starWars: function(){
        console.log("Star Wars: PG");
    },

    indianaJones: function(){
        console.log("Indiana Jones: PG-13");
    },

    favMovie: "The Matrix"   // can also add plain variables here too
};

// Any time that you create a module, it gives you a blank modules.exports object by default that you can
// use to populate it with whatever you want (functions, variables, etc )