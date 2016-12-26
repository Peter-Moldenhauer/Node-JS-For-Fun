// Server framework named connect

var connect = require('connect');
var http = require('http');

// create connect dispatcher - core connect object - function that takes the request and response arguments
// so whenever a user makes a request to the server, it looks here to see how to handle the request

var app = connect();   // looks here (to the app variable) to see how to handle this request

function doFirst(request, response, next){  // this is middleware
    console.log("Bacon");
    next();
}

function doSecond(request, response, next){  // this is middleware
    console.log("Tuna");
    next();
}

app.use(doFirst);   // the code to handle user requests is called middleware
app.use(doSecond);

http.createServer(app).listen(8888);

console.log("Server is running...");
