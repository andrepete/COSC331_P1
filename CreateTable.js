var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "andrepeter",
    password: "GoinDownFerReal567",
    database: "mydatabase"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE students (id INT, firstName VARCHAR(255), lastName VARCHAR(255), year SMALLINT, age TINYINT, major VARCHAR(255), gpa FLOAT(3,2))";
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Table Created!");
    });
});