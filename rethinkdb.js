var r = require('rethinkdb');

const connDetails = function(r, config) {
var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
r.db('test').tableCreate('agents').run(connection, function(err, result) {
    if (err) throw err;
    //console.log(JSON.stringify(result));
})
})
}

exports.connDetails = connDetails;

