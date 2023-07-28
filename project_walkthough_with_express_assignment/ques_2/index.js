const http = require('http')

let count = 0;

const server = http.createServer((request, response) => {
    if(request.url == '/'){
        count = 0;
        response.write(`<h1>count: ${count}</h1>`)
    }else if(request.url == '/increment'){
        count++;
        response.write(`<h1>count: ${count}</h1>`)
    }else if(request.url == '/decrement'){
        count--;
        response.write(`<h1>count: ${count}</h1>`)
    }
    response.end();
})

server.listen(3000, () => {
    console.log("Server running")
})