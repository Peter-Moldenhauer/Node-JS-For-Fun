// Whenever you are working with node, everything is a reference

var Peter = {
    favFood: "beef",
    favMovie: "Expendables"
};

var Person = Peter;  // When Person is assigned here, a copy is not made but rather a reference to Peter is made
Person.favFood = "salad"; // because a reference to Peter was made, this assigns "salad" to Peter's favFood
console.log(Peter.favFood); // salad is printed out