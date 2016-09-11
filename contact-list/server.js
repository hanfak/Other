var express = require('express');
var mongoose  = require("./db/connection");
var app = express();
var fs = require("fs");

var Contact = mongoose.model("Contact");

var person1 = {
  name: 'person 1 name',
  email: 'person1@email.com',
  number: '111 111 1111'
};

var person2 = {
  name: 'person 2 name',
  email: 'person2@email.com',
  number: '222 222 2222'
};

var person3 = {
  name: 'person 3 name',
  email: 'person3@email.com',
  number: '333 333 3333'
};

var contactList = [person1, person2, person3];

app.use(express.static(__dirname + "/public"));

app.get('/var', function(req,res) {
  console.log('Received GET request');
  res.json(contactList);
});

app.get('/file', function(req, res) {
  var contents = fs.readFileSync("foo.txt");
  var jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});

app.get('/db', function(req, res) {
  Contact.find().then(function(contacts){
    console.log(contacts);
    res.json(contacts);
  });
});

app.listen(3000);
console.log('server running');
