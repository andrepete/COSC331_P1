
const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

//create variable to connect to database
var con = mysql.createConnection({
    host: "localhost",
    user: "andrepeter",
    password: "GoinDownFerReal567",
    database: "mydatabase"
});

//connect to database
con.connect(function(err){
    if(err) throw err;
    console.log("Connected")
});

//get request
app.get('/', (req, res) => {
    con.query("SELECT * FROM students WHERE id=?", req.body.id, function(err, result){
        if(err) throw err;
        res.send(result);
    });
});

//post request
app.post('/', (req, res) => {
    con.query("INSERT INTO students SET ?", req.body, function(err, result){
        if(err) throw err;
        res.send("Complete");
    });
});

//put request
app.put('/', (req, res) => {
    con.query("UPDATE students SET firstName=?, lastName=?, year=?, age=?, major=?, gpa=? WHERE id=?", [req.body.firstName, req.body.lastName, req.body.year, req.body.age, req.body.major, req.body.gpa, req.body.id], function(err, result){
        if(err) throw err;
        res.send("Complete");
    })
});

//patch request
app.patch('/', (req, res) => {
    con.query("UPDATE students SET firstName = ? WHERE id = ?", [req.body.firstName, req.body.id], function(err, result){
        if(err) throw err;
        res.send("Complete");
    });
});

//delete request
app.delete('/', (req, res) => {
    con.query("DELETE FROM students WHERE id=?", [req.body.id], function(err, result){
        if(err) throw err;
        res.send("Complete");
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
