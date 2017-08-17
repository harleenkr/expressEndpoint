var express = require('express');
var app = express();
var Docker = require('dockerode');

app.get('/',function(req,res){
res.send("initally check GET details");
});

app.listen(3030);