var express = require('express');
var app = express();
const controller = require('./controllers')
var Router= require('router')
var router = Router()

app.get('/', function(req,res){
res.send("check initial GET details");
});

app.get('/listContainers',controller.containers);
app.get('/listImages',controller.images);

//other invalid routes here
app.get('*',function(req,res){
res.send("Sorry, this is an invalid Url");
});

app.listen(3010,function(req,res){
console.log("Server is running at port:3010")
});