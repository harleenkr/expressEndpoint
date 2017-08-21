var r = require('rethinkdb');
var dbConfig = require('./config/config');

module.exports.connDetails = function(r, dbconfig) {
var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
/*r.dbCreate('superheroes').run(connection, function(err, result) {
    if (err) throw err;
    // console.log(JSON.stringify(result));
})*/
r.db('test').tableCreate('agents').run(connection, function(err, result) {
    if (err) throw err;
    //console.log(JSON.stringify(result));
})
})
const create = function (dbName,tableName,countryId) {
        return r.db(dbName).tableCreate(tableName,{primaryKey: countryId}).run(connection)
        .then(function (result) {
            return result;
        });
    };
    //tableName, object
const save = function () {
        /*return r.table(tableName).insert(object).run(connection)
        .then(function (result) {
            return result;
        });*/
        console.log("test save details");
    };
}
//module.exports.connDetails = connDetails;
 /*var connection = r.connect(dbConfig)
.then(function (connection) {
  module.exports.create = function (dbName,tableName,countryId) {
        return r.db(dbName).tableCreate(tableName,{primaryKey: countryId}).run(connection)
        .then(function (result) {
            return result;
        });
    };
    module.exports.save = function (tableName, object) {
        return r.table(tableName).insert(object).run(connection)
        .then(function (result) {
            return result;
        });
    };
})
module.exports = connection;*/