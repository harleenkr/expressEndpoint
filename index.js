var express = require('express');
var app = express();
const controller = require('./controllers')
var router = express.Router()
app.use('/',router);

router.get('/', function(req,res){
res.send("check initial GET details");
});

router.get('/listContainers',controller.containers);
router.get('/listImages',controller.images);

//other invalid routes here
router.get('*',function(req,res){
res.send("Sorry, this is an invalid Url");
});

app.listen(3010,function(req,res){
console.log("Server is running at port:3010")
});
