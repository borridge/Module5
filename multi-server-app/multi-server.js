// multi-server.js
const http = require('http');

// List of ports to start servers on
const ports = [3000, 3001, 3002];

ports.forEach((port) => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello from server running on port ${port}`);
  });

  server.listen(port, () => {
    console.log(`✅ Server listening at http://localhost:${port}`);
  });
});
