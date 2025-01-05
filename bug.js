const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// This is a very simple server with no error handling. 
// Uncommon bugs can arise from improper handling of asynchronous operations, or improper use of third-party libraries, or improper memory management.