const https = require('https');
const port = 443;

const requestHandler = (request, response) => {
  console.log("serving: " + request.socket.remoteAddress);
  response.end(request.socket.remoteAddress);
}

const server = https.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})
