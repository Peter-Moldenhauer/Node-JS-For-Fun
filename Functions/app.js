// Function Eample 1:
function addNumber(a, b){
    return a + b;
}
console.log(addNumber(7, 3));   // when you try to print or "log out" a function it prints the return data, this prints 10



// Function Example 2:
function worthless(){
}
console.log(worthless());  // this prints out "undefined" because the function doesnt have a return value



// Function Example 3:  (set a function equal to a variable)
var printBacon = function(){    // set a variable equal to an anonymous function, don't need a name for the function
    console.log("Bacon is healthy, don't believe the doctors!");  // This is an anonymous function
};
printBacon();  // print out the function via the variable

// when you have a function stored in a variable you can use it and pass it to other functions
setTimeout(printBacon, 5000); // call the printBacon code in 5 seconds