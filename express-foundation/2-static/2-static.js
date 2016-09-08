var path = require('path')
var express = require('express');
var app = express();

// load up files in stated path
app.use(express.static(process.argv[3] || path.join(__dirname, 'public/views')));

app.listen(process.argv[2] || 3000);
