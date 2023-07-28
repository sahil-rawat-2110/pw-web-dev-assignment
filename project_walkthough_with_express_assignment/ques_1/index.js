const http = require('http')
const data = require('./data')


const server = http.createServer((request, response) => {
    if(request.url=="/")
    response.write(`<h1>Welcome to Men & Women Dummy Data</h1>`)
    else if(request.url == '/men'){
        response.statusCode = 200
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(data.mens_data))
    }
    else if(request.url == '/women'){
        response.statusCode = 200
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(data.womens_data))
    }
    else{
        response.write(`<h1>Page Not Found</h1>`)
    }
    response.end();
})

server.listen(3000, () => {
    console.log("Server running at 3000")
})
