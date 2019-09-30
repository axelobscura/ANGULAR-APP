const http = require('http');
const app = require('./backend/app');

//const port = process.en.PORT || 3000;
const port = 3000;

app.set('port', port);
const server = http.createServer(app);

//server.listen(process.en.PORT || 3000);
server.listen(port);
