// Simple Web File server

var http = require('http');

var fs = require('fs');  // with this you are allowed to work with files on your computer - file module

//404 response - hopefully you wont ever have to call this function, but if user requests a file that you dont have then this is what you send them
function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

//Handle a user request - listen for a request and send them whatever file they requested
function onRequest(request, response){
    if( request.method == 'GET' && request.url == '/' ){  // inspect the request to see if user is trying to connect to the homepage. Note: the '/' means connect to home page
        response.writeHead(200, {"Content-Type": "text/html"});  // to send a file use text/html here
        fs.createReadStream("./index.html").pipe(response); // send file back in a "stream". Note: pipe() means send it out or feed it out (the stream to the response object - which is the response that you are sending back)
    }else{
        send404Response(response); // otherwise see if user is trying to connect to a page other than homepage and send back the 404 response object
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");
