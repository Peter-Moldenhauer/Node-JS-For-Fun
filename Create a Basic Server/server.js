// Create a basic http server

// first need the http module that is already built in
var http = require('http');

function onRequest(request, response){  // onRequest function with two parameters
    console.log("A user made a request" + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is some data");
    response.end();
}

// only thing you need to do to turn your node js code and create a server is this...
http.createServer(onRequest).listen(8888);  // the code in the createServer parenthesis is what code (callback) you want to run when someone connects to your server - send back a web file, web page or some info from database

// log something in terminal to indicate that the server is now running...
console.log("Server is now running...");
