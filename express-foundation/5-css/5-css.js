var path = require('path');
var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3] || path.join(__dirname, 'public/css')));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public/')));

app.listen(process.argv[2] || 3000);
