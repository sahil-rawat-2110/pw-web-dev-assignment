const express = require('express')

const app = express()

const HostName = 'localhost'
const Port = 8080

app.get('/', (req,res) => {
    res.send(`<div style="font-size:40px">I am homepage</div>`)
})

app.get('/about', (req,res) => {
    res.send(`<div style="font-size:40px">I am about page</div>`)
})

app.get('/contact', (req, res) => {
    res.send(`<div style="font-size:40px">email: <span style="font-weight:bold;">support@pwskills.com</span></div>`)
})

app.listen(Port, () => {
    console.log(`Server running at ${HostName}:${Port}`)
})