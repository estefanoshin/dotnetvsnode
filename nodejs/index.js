//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 8000;

const urlTest = 'http://www.e-galenomovil.com.ar/mobile-rest-services/centros/';

//Create HTTP server and listen on port 8000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  var result = http.get(urlTest, (resp) => {
    resp.on('data', function (data) {
      console.log(data);
    });
  });


  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result));
});

//listen for request on port 8000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
