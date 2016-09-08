// 1. Import the express library
var express = require('express');
// 2, instantiate the express app
var app = express();

//Set up GET route for /
app.get('/home', function(req, res){
  res.end('Hello World!')
});
//Wild card, means any route will run the callback
app.get('*', function(req, res){
  res.end('Hello World!')
});
//Set up port, to listen for server
// app.listen(3000) //in general to access on localhost:3000
app.listen(process.argv[2] || 3000); // for program

// to run server
// $ node <Filename>.js
