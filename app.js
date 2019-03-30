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


app.get('/students', (req, res) => res.send('Hello World!'))

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

app.put('/', (req, res) => res.send('Got a put request at /user'))
app.patch('/', (req, res) => res.send('Got a patch request at /user'))
app.delete('/', (req, res) => res.send('Got a delete request at /user'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))