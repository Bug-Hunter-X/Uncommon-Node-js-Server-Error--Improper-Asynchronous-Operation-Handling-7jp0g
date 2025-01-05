const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle requests here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    console.error('Error handling request:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
server.on('error', (err) => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use.');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});