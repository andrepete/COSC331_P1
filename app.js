const express = require('express')
var mysql = require('mysql')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/documents', (req, res) => res.send('Sent a get request to documents'))
app.post('/', (req, res) => res.send('Post request at root'))
app.put('/', (req, res) => res.send('Got a put request at /user'))
app.patch('/', (req, res) => res.send('Got a patch request at /user'))
app.delete('/', (req, res) => res.send('Got a delete request at /user'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))