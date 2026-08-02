const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'API ready' }));
});

server.listen(0, () => {
  const { port } = server.address();
  console.log(`Test server listening on ${port}`);
  server.close();
});
