const http = require('http');
const port = 17480;

const requestHandler = (request, response) => {
  console.log("serving: " + request.socket.remoteAddress);
  response.end(request.socket.remoteAddress);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})



const http = require('http');

const hostname = '192.168.38.187';
const port = 17480;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});