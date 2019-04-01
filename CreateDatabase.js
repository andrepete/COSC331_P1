var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "andrepeter",
    password: "GoinDownFerReal567"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydatabase", function (err, result){
        if(err) throw err;
        console.log("Database created");
    });
});