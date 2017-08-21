var express = require('express');
var app = express();
const controller = require('./controllers')
var router = express.Router()
const rdb = require('./rethinkdb')
var bodyParser = require('body-parser')
var request = require('request');
// var db = require('./connDetails')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',router);
router.get('/', function(req,res){
res.send("check initial GET details");
});
router.get('/listContainers',controller.containers);
router.get('/listImages',controller.images);
request('http://pplapi.com/country/us/random.json',function(error,response,body){
body =JSON.parse(body)
 var newUser = {
            neuroticism: body.neuroticism,
            language: body.language,
            latitude: body.latitude,
            country_tld: body.country_tld,
            age:body.age,
            income: body.income,
            longitude: body.longitude,
            sex: body.sex,
            religion: body.religion,
            extraversion: body.extraversion,
            date_of_birth: body.date_of_birth,
            agreeableness: body.agreeableness,
            id_str: body.id_str,
            conscientiousness: body.conscientiousness,
            internet: body.internet,
            country_name: body.country_name,
            openness: body.openness,
            id:body.id,
        };
/*rdb.save('agent', newUser)
        .then(function (result) {
            response.json(result);
        });*/
        //console.log('newUser in us',newUser);
});
request('http://pplapi.com/country/de/random.json',function(error,response,body){
body =JSON.parse(body)
 var newUser = {
            neuroticism: body.neuroticism,
            language: body.language,
            latitude: body.latitude,
            country_tld: body.country_tld,
            age:body.age,
            income: body.income,
            longitude: body.longitude,
            sex: body.sex,
            religion: body.religion,
            extraversion: body.extraversion,
            date_of_birth: body.date_of_birth,
            agreeableness: body.agreeableness,
            id_str: body.id_str,
            conscientiousness: body.conscientiousness,
            internet: body.internet,
            country_name: body.country_name,
            openness: body.openness,
            id:body.id,
        };
/*rdb.save('agent', newUser)
        .then(function (result) {
            response.json(result);
        });*/
        //console.log('newUser in de',newUser);
});
request('http://pplapi.com/country/fr/random.json',function(error,response,body){
body =JSON.parse(body)
 var newUser = {
            neuroticism: body.neuroticism,
            language: body.language,
            latitude: body.latitude,
            country_tld: body.country_tld,
            age:body.age,
            income: body.income,
            longitude: body.longitude,
            sex: body.sex,
            religion: body.religion,
            extraversion: body.extraversion,
            date_of_birth: body.date_of_birth,
            agreeableness: body.agreeableness,
            id_str: body.id_str,
            conscientiousness: body.conscientiousness,
            internet: body.internet,
            country_name: body.country_name,
            openness: body.openness,
            id:body.id,
        };
/*rdb.save('agent', newUser)
        .then(function (result) {
            response.json(result);
        });*/
        //console.log('newUser in fr',newUser);
});
request('http://pplapi.com/country/ru/random.json',function(error,response,body){
body =JSON.parse(body)
 var newUser = {
            neuroticism: body.neuroticism,
            language: body.language,
            latitude: body.latitude,
            country_tld: body.country_tld,
            age:body.age,
            income: body.income,
            longitude: body.longitude,
            sex: body.sex,
            religion: body.religion,
            extraversion: body.extraversion,
            date_of_birth: body.date_of_birth,
            agreeableness: body.agreeableness,
            id_str: body.id_str,
            conscientiousness: body.conscientiousness,
            internet: body.internet,
            country_name: body.country_name,
            openness: body.openness,
            id:body.id,
        };
/*rdb.save('agent', newUser)
        .then(function (result) {
            response.json(result);
        });*/
        //console.log('newUser in ru',newUser);
});
request('http://pplapi.com/country/jp/random.json',function(error,response,body){
body =JSON.parse(body)
 var newUser = {
            neuroticism: body.neuroticism,
            language: body.language,
            latitude: body.latitude,
            country_tld: body.country_tld,
            age:body.age,
            income: body.income,
            longitude: body.longitude,
            sex: body.sex,
            religion: body.religion,
            extraversion: body.extraversion,
            date_of_birth: body.date_of_birth,
            agreeableness: body.agreeableness,
            id_str: body.id_str,
            conscientiousness: body.conscientiousness,
            internet: body.internet,
            country_name: body.country_name,
            openness: body.openness,
            id:body.id,
        };
/*rdb.save('agent', newUser)
        .then(function (result) {
            response.json(result);
        });*/
        //console.log('newUser in jp',newUser);
});
request('http://pplapi.com/random.json',function(error,response,body){

body =JSON.parse(body)
  var newUser = {
             neuroticism: body.neuroticism,
             language: body.language,
             latitude: body.latitude,
             country_tld: body.country_tld,
            age: body.age,
            income: body.income,
            longitude: body.longitude,
            sex: body.sex,
            religion: body.religion,
            extraversion: body.extraversion,
            date_of_birth: body.date_of_birth,
            agreeableness: body.agreeableness,
            id_str: body.id_str,
            conscientiousness: body.conscientiousness,
            internet: body.internet,
            country_name: body.country_name,
            openness: body.openness,
            id: body.id,
        };
       //console.log('newUser in random data',newUser);
       //console.log("rdb",rdb.connDetails.save('agent', newUser));
       /*rdb.connDetails.save('agent', newUser)
        .then(function (result) {
          console.log('result',result);
            response.json(result);
        });*/
});

//other invalid routes here
router.get('*',function(req,res){
res.send("Sorry, this is an invalid Url");
});

app.listen(3010,function(req,res){
console.log("Server is running at port:3010")
});
