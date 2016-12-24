// Prototyping allows you to add methods and/or properties to classes and objects

function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Peter = new User();
var Sally = new User();

Peter.name = "Peter";
Sally.name = "Sally";

Peter.giveLife(Sally);
console.log("Peter: " + Peter.life);
console.log("Sally: " + Sally.life);

// through prototypes you can add functions to objects...

// Use prototypes to add adtional functions onto the User object/class
// Now every instance of the User class has access to the new takeLifeAway function
User.prototype.takeLifeAway = function takeLifeAway(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " took 3 lives from " + targetPlayer.name);
};

Sally.takeLifeAway(Peter);
console.log("Peter: " + Peter.life);
console.log("Sally: " + Sally.life);

// through prototyping you can also add new properties to objects/classes...

User.prototype.magic = 60; // add the magic property with a value of 60 to each instance of User

console.log(Peter.magic);
console.log(Sally.magic);

