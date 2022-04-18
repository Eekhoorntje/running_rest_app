const http = require("http");

http.createServer(function (req, res) {
  
   res.writeHead(200, {'Content-Type': 'text/plain'});
 
   res.end('Hello World\n');
   
}).listen(8000);

console.log('Server started at http://127.0.0.1:8000/');


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "eekhoorntje",
  password: "mysqlpass"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
