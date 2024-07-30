const http = require('node:http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome to our home page');
    } 
    else if (request.url === '/about') {
        response.end('this is the about page');
    } 
    else {
        response.end(`
             <h1> Ops! </h1>
            <p> We can't seem to find the page you're looking for </p> 
            <a href="/"> Back home </a>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
