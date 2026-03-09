// app.js
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello World\n');
}).listen(3000, () => console.log('Running on :3000'));
