// The difference between setInterval and setTimeout is that setTimeout runs once after the period of time while
// setInterval runs repeatedly - so any code that is in the callback is going to be called.
// So in this example, every 2 seconds, beef is printed out

setInterval(function() {
    console.log("beef");
}, 2000);

