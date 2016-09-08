var express = require('express');
var app = express();
// set jade templates, library
app.set('view engine', 'jade');
// where folder of template
// app.set('views', process.argv[3]);
app.set('views', __dirname + '/views');


app.get('/home', function(req, res){
  res.render('index', {date: new Date().toDateString()});
});

// Using json/object to access data for jade template
app.get('/next', function(req, res){
  res.render('next', {name: 'Han'});
});

app.listen(process.argv[2] || 3000);
