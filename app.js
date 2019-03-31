const express = require('express')
var mysql = require('mysql')
const app = express()
const port = 3000

var con = mysql.createConnection({
    host: "localhost",
    user: "andrepeter",
    password: "GoinDownFerReal567",
    database: "mydatabase"
});


app.get('/get-student-info', (req, res) => {
    con.connect(function (err){
        if(err) throw err;
        con.query("SELECT * FROM students WHERE id = '12'", function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });
})

app.post('/create-student', (req, res) => {
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO students (id, firstName, lastName, year, age, major, gpa) VALUES ('12', 'Andre', 'Petersheim', '2021', '19', 'CS', '4.0')";
        con.query(sql, function(err, result){
            if(err) throw err;
            res.send("1 record inserted");
        });
    });
})

app.put('/', (req, res) => {
    
})

app.patch('/change-major', (req, res) => {
    con.connect(function(err){
        if(err) throw err;
        con.query("UPDATE students SET major = 'IT' WHERE id = '12'", function(err, result){
            if(err) throw err;
            res.send("Major updated");
        });
    });
})

app.delete('/delete-student', (req, res) => {
    con.connect(function(err){
        if(err) throw err;
        con.query("DELETE FROM students WHERE id = '12'", function(err, result){
            if(err) throw err;
            res.send("Student Deleted");
        });
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))