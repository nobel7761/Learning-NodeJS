const http = require('http');
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello World');
        response.end();
    }
    if (request.url === '/students') {
        response.write(JSON.stringify([
            { name: 'Habibur' },
            { name: 'Nobel' }
        ]));
        response.end();
    }
})

server.listen(3000); //defining port number
console.log("Listening on post 3000.....");