var path = require('path')
var express = require('express');
var app = express();

// load up files in stated path
app.use(express.static(process.argv[3] || path.join(__dirname, 'public/views')));
// Can add other paths to look for file
app.use(express.static(process.argv[3] || path.join(__dirname, 'public/')));

app.listen(process.argv[2] || 3000);

// To access files, go to /<name_of_file>.<format>, as it is already looking in that path
