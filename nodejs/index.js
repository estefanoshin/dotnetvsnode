//Load HTTP module
const http = require("http");
const fetch = require('node-fetch');
const hostname = '127.0.0.1';
const port = 8000;

const urlTest = 'http://www.e-galenomovil.com.ar/mobile-rest-services/centros/';

//Create HTTP server and listen on port 8000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  fetch(urlTest).then(res => res.json()).then((json) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json));
  });
});

//listen for request on port 8000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
