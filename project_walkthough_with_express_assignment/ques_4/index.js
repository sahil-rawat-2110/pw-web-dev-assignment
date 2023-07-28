const express = require('express')

const app = express()

app.get('/random', (req,res) => {
    let num = Math.floor(Math.random()*100)
    res.send(JSON.stringify({
        "random" : num
    }))
})

app.listen(8080, () => {
    console.log("Server running at localhost:8080")
})