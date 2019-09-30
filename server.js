const http = require('http');

const server = http.createServer((req, res) => {
  res.end('this is my first response');
});

//server.listen(process.en.PORT || 3000);
server.listen(3000);
