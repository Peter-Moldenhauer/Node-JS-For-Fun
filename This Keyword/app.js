// this keyword - refers to the thing that called it

var Peter = {
    printFirstName: function(){
        console.log("My name is Peter");
        console.log(this === Peter);  // this prints "logs" true because its refering to the object that called it
    }                                 // since Peter is calling the function its the same as Peter === Peter
};
Peter.printFirstName();

// But what happens when a function is created that isnt clearly a part of the same object...

// The default calling context is global
function doSomethingWorthless(){
    console.log("\nI am worthless");
    console.log(this === global);  // this will print true
}
doSomethingWorthless(); // note above when the function was tied to the Peter object with the . Here its tied to "global"