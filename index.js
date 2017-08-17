var express = require('express');
var app = express();
var Docker = require('dockerode');
var docker = new Docker({host: 'http://35.193.23.248', port: 2375})

app.get('/',function(req,res){
res.send("initally check GET details");
});

app.get('/listContainers',function(req,res){
res.send("check Containers details");
});

app.get('/listImages',function(req,res){
res.send("check Image details");
});

//other routes here
app.get('*',function(req,res){
res.send("Sorry, this is an invalid Url");
})

app.listen(3030);