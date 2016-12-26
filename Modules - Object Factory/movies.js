// An object factory is an object that creates another object
// Object factory allows each module (sally, peter) to have their own custom copy of the favMovie object

module.exports = function(){  // This function will return a new object every single time (so Sally and Peter
   return{                    // can both set their own unique favMovies
       favMovie: ""
   }
};

// So basically the module.exports object creates other objects by the use of the function