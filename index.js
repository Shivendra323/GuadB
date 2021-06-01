var express = require('express');
var http = require('http');
var app = express();
const path = require('path');
var fs = require('fs');


var servers = http.createServer(app).listen(8080, function(req, res){
       console.log('HTTPS listening on 8080');
});

app.use(express.static("page"));





