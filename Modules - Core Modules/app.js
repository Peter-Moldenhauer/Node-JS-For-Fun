// Core modules are built into Node JS automatically
// There are A LOT of core modules!
//Note: when using core modules, do not include the ./ path that you would with your own custom modules

// -------------------------------------------------------------------------

var fs = require('fs'); // file system module: allows you to read/write/delete files

fs.writeFileSync("myTextFile.txt", "Hello World in a text file"); // create a new text file named myTextFile.txt
                                              // The text file contains the text: Hello World in a text file

console.log(fs.readFileSync("myTextFile.txt").toString()); // reads the file in and converts to string to print out

// ------------------------------------------------------------------------------

var path = require('path');
var websiteHome = "Desktop/Peter//mygreatsite/index.html";  //note the error with the double // after Peter
var websiteAbout = "Desktop/Peter/mygreatsite/about.html";

console.log(path.normalize(websiteHome)); // this corrects the error and normalizes the slashes based on your operating system...some operating systems use / and others use \
console.log(path.dirname(websiteAbout));  // prints out Desktop/Peter/mygreatsite
console.log(path.basename(websiteAbout));  // prints out about.html
console.log(path.extname(websiteAbout));   // prints out .html


