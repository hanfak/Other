var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// app.set('view engine', 'jade');
// app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});


// app.get('/home', function(req, res){
//   res.render('index', {date: new Date().toDateString()});
// });


app.listen(process.argv[2] || 3000);
