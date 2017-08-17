var express = require('express');
var app = express();
var Docker = require('dockerode');

app.get('/',function(req,res){
res.send("initally check GET details");
});

app.get('/listContainers',function(req,res){
res.send("check Containers details");
});

vapp.get('/listImages',function(req,res){
res.send("check Image details");
});

app.listen(3030);